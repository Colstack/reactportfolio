import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";

const Contact = ({}) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row rowCont">
          <div className="col-12 col-lg-12">
            <Form />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;