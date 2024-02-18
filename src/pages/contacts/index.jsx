import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from "react";

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
        <section className='w-[80%] md:w-[500px] mx-auto flex flex-col gap-8 p-2'>
            <div className='w-full rounded-lg flex flex-col gap-4 justify-center items-center min-h-fit border border-black py-10'>
                <h2 className='text-3xl sm:text-5xl pb-10'>Contact us anytime!</h2>
                <p className='font-thin'>Abhisarga socials</p>
                <div className='w-1/2 flex flex-row justify-around'>
                    <a href="#" className="social-icon">
                        <InstagramIcon />
                    </a>
                    <a href="#" className="social-icon">
                        <LinkedInIcon />
                    </a>
                    <a href="#" className="social-icon">
                        <XIcon />
                    </a>
                    <a href="#" className="social-icon">
                        <YouTubeIcon />
                    </a>
                </div>
            </div>

            <form className='w-full rounded-lg min-h-fit flex flex-col md:flex-row flex-wrap gap-8' onSubmit={handleSubmit}>
                <div className='w-full md:w-[46%] flex flex-col'>
                    <label className='font-thin' htmlFor="fullname">Full Name:</label>
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
                    <label className='font-thin' htmlFor="email">Email:</label>
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
                    <label className='font-thin' htmlFor="message">Message:</label>
                    <textarea
                        id="message"
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
    );
}