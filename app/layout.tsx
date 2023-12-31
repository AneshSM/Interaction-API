import NavBar from '@components/NavBar'
import AuthProvider from '@context/AuthProvider'
import '@styles/globals.css'

export const metadata={
    title:'Home',
    description:'Welcome to API Interaction'
}

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang='en'>
        <body >
            <AuthProvider>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                <main className='app'>
                <NavBar/>
                    {children}
                </main>
            </AuthProvider>
        </body>
    </html>
    )
}

export default RootLayout