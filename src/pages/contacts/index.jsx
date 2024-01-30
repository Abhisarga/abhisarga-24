// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import XIcon from '@mui/icons-material/X';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import { useState } from "react";

// export default function ContactForm() {
//     const [fullname, setFullname] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [error, setError] = useState([]);
//     const [success, setSuccess] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         console.log("Full name: ", fullname);
//         console.log("Email: ", email);
//         console.log("Message: ", message);

//         const res = await fetch("api/contact", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({
//                 fullname,
//                 email,
//                 message,
//             }),
//         });

//         const { msg, success } = await res.json();
//         setError(msg);
//         setSuccess(success);

//         if (success) {
//             setFullname("");
//             setEmail("");
//             setMessage("");
//         }
//     };

//     return (
//         <>
//             <div className="box1">
//                 <div className="box-content">
//                     <h3 className="contact">Contact us anytime!</h3>
//                 </div>
//                 <div className="box-content2">
//                     <h3 className="email">Email</h3>
//                     <input type="email" className="email" placeholder="Enter your email" value="XXXXXX" />
//                     <br></br><input type="email" className="email" placeholder="Confirm your email" value="XXXXXX" />

//                 </div>
//                 <div className="box-content3">
//                     <h3 className="email">Phone</h3>
//                     <input type="tel" className="email" placeholder="Enter your phone no." value="XXXXXX" />
//                     <br></br><input type="tel" className="email" placeholder="Enter your phone no." value="XXXXXX" />
//                 </div>
//                 <div className="box-content4">
//                     <h3 className="email">Drop in a message</h3>
//                     <textarea name="msg" id="" cols="30" rows="5">Your msg goes here ... </textarea>
//                 </div>
//                 <div className="box-content5">
//                     <h3 className="email">Abhisarga Socials</h3>
//                     <a href="#" className="social-icon">
//                         <InstagramIcon />
//                     </a>
//                     <a href="#" className="social-icon">
//                         <LinkedInIcon />
//                     </a>
//                     <a href="#" className="social-icon">
//                         <XIcon />
//                     </a>
//                     <a href="#" className="social-icon">
//                         <YouTubeIcon />
//                     </a>

//                 </div>
//             </div>
//             <div className="bg-slate-100 flex flex-col">
//                 {error &&
//                     error.map((e, index) => (
//                         <div
//                             key={index}
//                             className={`${success ? "text-green-800" : "text-red-600"
//                                 } px-5 py-2`}
//                         >
//                             {e}
//                         </div>
//                     ))}
//             </div>
//         </>
//     );
// }


export default function Contacts() {
    return (
        <></>
    )
}