const sendMsgToStc = async (name, email, msg) => {
    const res = await fetch("https://s-t-c-backend.vercel.app/msgs/send-msg", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, email, msg
        })
    });
    const response = await res.json();
    console.log(response);
    return response;
};

export { sendMsgToStc };
