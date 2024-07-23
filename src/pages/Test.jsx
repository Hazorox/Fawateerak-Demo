
const Test = () => {
  const pluginConfig = {
    envType: "test",
    hashKey: "HASH-KEY",
    requestBody: {
      cartTotal: "50",
      currency: "EGP",
      customer: {
        first_name: "test",
        last_name: "fawaterk",
        email: "test@fawaterk.com",
        phone: "0123456789",
        address: "test address",
      },
      redirectionUrls: {
        successUrl: "https://dev.fawaterk.com/success",
        failUrl: "https://dev.fawaterk.com/fail",
        pendingUrl: "https://dev.fawaterk.com/pending",
      },
      cartItems: [
        {
          name: "this is test oop 112252",
          price: "25",
          quantity: "1",
        },
        {
          name: "this is test oop 112252",
          price: "25",
          quantity: "1",
        },
      ],
      payLoad: {
        custom_field1: "xyz",
        custom_field2: "xyz2",
      },
    },
  };

  
  return (
    <>
      hi
      <div id="fawaterkDivId"></div>
      <script src="https://app.fawaterk.com/fawaterkPlugin/fawaterkPlugin.min.js"></script>
    </>
  );
};

export default Test;
