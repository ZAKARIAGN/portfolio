import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_90m2obf",
        "template_ap1e794",
    e.target, { publicKey: "DHpI6EySveX2rtseI" })
    .then(()=>{
        alert("Message sent!");
    })
    .catch(() => {
      alert("Failed to send message.");
    });
}
export default sendEmail;