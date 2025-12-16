import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Provider = () => {
  const [googleConnected, setGoogleConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/me/google`, { withCredentials: true })
      .then((res) => setGoogleConnected(res.data.googleConnected))
      .catch(() => {});
  }, []);
  useEffect(() => {
    if (googleConnected) {
      navigate("/mail/sendmail");
    }
  }, [googleConnected, navigate]);

  const connectGoogle = () => {
    window.location.href = `${API}/auth/google`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Gmail Integration</h2>

      <button onClick={connectGoogle}>Connect Gmail</button>
    </div>
  );
};

export default Provider;
