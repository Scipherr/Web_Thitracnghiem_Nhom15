import { useEffect, useState } from "react";
import NavbarUser from "../layout/NavbarUser";

function TrangChu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <NavbarUser />

      <div style={{ padding: "40px" }}>
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h5 style={{ marginBottom: "10px" }}>Thông báo</h5>

          <p>
           
            Chào mừng <strong>{user ? `${user.last_name} ${user.first_name}` : ""}</strong> đến hệ thống thi trắc nghiệm STU
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrangChu;