import AppBar from "../component/Layout/AppBar"
import Layout from "../component/Layout/Layout"
import LoginForm from "../component/LoginForm"
//faire appel au formulaire de login et la barre de navigation
function LoginPage(){
    
    return <section>
        <AppBar/>
        <Layout>
        <LoginForm/>
        </Layout>
        </section>
}
export default LoginPage