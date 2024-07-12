function SubscribeSection() {
  return (
    <section className="section4">
      <h1 className="subscribehearder">SUBSCRIBE</h1>
      <h4 className="subscribesubhearder">Sign-up to our newsletter</h4>
      <div className="rowcenter">
        <form className="subscribeform" method="post">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-email"
          />{" "}
          <br />
          <input
            type="button"
            name="bntsubmit"
            className="btnsub"
            value="SUBMIT"
          />
        </form>
      </div>
    </section>
  );
}

export default SubscribeSection;
