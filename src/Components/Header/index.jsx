
import './styles.css'

export default function Header() {
    return (
        <div className='div-header'>
            <h1>Blog</h1>
            <a href='news'>News</a>
            <a href='aboutus'>Abouts Us</a>
            <a href='contact'>Contact Us</a>
            <div className='button-header'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div >
    )
}