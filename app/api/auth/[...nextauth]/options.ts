import {NextAuthOptions} from 'next-auth'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { connectToMDB } from '@db/mangodb'
import User from '@models/users'
export const options:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{
                    label:"Username",
                    type:'text',
                    placeholder:'Username'
                },
                password:{
                    label:"Password",
                    type:'password',
                    placeholder:'Password'
                }
            },
            async authorize(credentials){
                const user={id:'1',name:"Ane",password:'next-api',role:'admin'}
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }
                else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret:process.env.GOOGLE_SECRET as string,
        }),
        GitHubProvider({
            profile(profile:GithubProfile){
                // console.log(profile)
                return {
                    ...profile,
                    role:profile.role ?? 'user',
                    id:profile.id.toString(),
                    image:profile.avatar_url     
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    callbacks:{
        jwt({token,user}){
            if(user)token.role=user.role
            return token
        },
        async session({session,token}){
            if(session?.user){ 
                session.user.role=token.role
                const userData=await User.findOne({email:session.user.email})
                session.user.id=userData._id.toString()
            }
            return session
        },
        async signIn({profile}) {
            try {
                await connectToMDB();

                if(await User.findOne({ email: profile?.email })){
                    return true
                }else{
                    User.create({
                        email:profile?.email,
                        username:profile?.name?.replace(" ","").toLocaleLowerCase(),
                        image:profile?.image,
                        role:'user'
                    })
                }
                
            } catch (error) {
                
            }
        }
    },         
}