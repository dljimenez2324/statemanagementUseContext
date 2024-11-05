import { useNavigate } from "react-router-dom";


const ContactPage = () => {

  // remember to use the hook useNavigate
  const navigate = useNavigate();

  return (
<>
    <div>

        <form onSubmit={(e) => {
            e.preventDefault();
            navigate('/');
        }}>
            

            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
</>
  )
}

export default ContactPage