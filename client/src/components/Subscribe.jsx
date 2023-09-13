import React, { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
        setEmail("")
      })
      .catch(function (error) {
        console.error("Klaida siunčiant el. paštą:", error)
        setMessage("Įvyko klaida. Prašome bandyti vėliau.")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Užsiprenumeruokite mūsų naujienlaiškį</h5>
        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <label htmlFor="subsribers" className="visually-hidden">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Jūsų el. paštas"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="btn btn-primary" type="submit">
            Prenumeruoti
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
      