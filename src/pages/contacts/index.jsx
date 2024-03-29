import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from "react";
import ImgElements from "../../components/helpers/ImgElements";


export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <>
            <ImgElements />
            <div className='bg-color1 min-h-screen'>
            <section className='w-[80%] z-10 relative md:w-4/5 h-[600px] min-h-fit mx-auto flex flex-col md:flex-row gap-2 p-2  rounded-lg bg-color3 bg-opacity-90 justify-center items-center'>
                <div className='w-full rounded-lg flex flex-col gap-4 justify-center items-center min-h-fit border border-black py-10 self-stretch'>
                    <h2 className='text-3xl sm:text-5xl pb-10'>Contact us anytime!</h2>
                    <p className='font-thin'>Abhisarga socials</p>
                    <div className='w-1/2 flex flex-row justify-around'>
                        <a href="https://www.instagram.com/abhisarga/" className="social-icon">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.linkedin.com/company/abhisarga-iiits/" className="social-icon">
                            <LinkedInIcon />
                        </a>
                        <a href="https://twitter.com/abhisarga_iiits" className="social-icon">
                            <XIcon />
                        </a>
                        <a href="https://www.youtube.com/@abhisarga2023" className="social-icon">
                            <YouTubeIcon />
                        </a>
                    </div>
                </div>

                <form className='w-full rounded-lg h-full p-4 flex flex-col justify-between items-center md:flex-row flex-wrap gap-3' onSubmit={handleSubmit}>
                    <h2 className='text-3xl sm:text-5xl pb-10 font-extralight'>Send us a message</h2>
                    <div className='w-full md:w-[46%] flex flex-col'>
                        <label className='font-thin' htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            value={fullname}
                            className='border border-black rounded-md p-2'
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>
                    <div className='w-full md:w-[46%] flex flex-col'>
                        <label className='font-thin' htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            className='border border-black rounded-md p-2'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='font-thin' htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows='4'
                            value={message}
                            className='border border-black rounded-md p-2'
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>Message sent successfully!</p>}
                    <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow mx-auto">Submit</button>
                </form>

            </section>
        </div>
        </>
    );
}