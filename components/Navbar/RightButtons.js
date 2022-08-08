import React, { useContext } from "react";
import { UserContext } from "../../context/authenticator";
export default function RightButtons() {
  const UserContextDatas = useContext(UserContext);
  const user = UserContextDatas.user;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button>{user ? user : "Giriş Yap"}</button>
      <button>{user ? "Çıkış Yap" : "Kayıt ol"}</button>
    </div>
  );
}
