const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    console.log("logout.js")
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log out");
      console.log("fail logout.js")
    }
  };
  
  document.querySelector("#logout").addEventListener("click", logout);