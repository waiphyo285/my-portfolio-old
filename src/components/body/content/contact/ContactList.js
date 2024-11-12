import React from "react";

function ContactListComponent({ contacts }) {
  return (
    <div className="d-grid gap-2">
      <div className="mb-4">
        Feel free to reach out to me using the following contact methods:
      </div>

      <ul className="list-group">
        {contacts.map((contact, contIdx) => (
          <div key={contIdx}>
            <li style={{ listStyle: "none" }} className={`p-2 text-center `}>
              <i
                aria-hidden="true"
                className={`social ${contact.icon}`}
                style={{
                  fontSize: "28px",
                  background: contact.color,
                  WebkitBackgroundClip: "text",
                  display: "inline-block",
                  color: "transparent",
                }}
              />
              <a className="m-2 d-block" href={contact["href"]}>
                {contact["show-text"]}
              </a>
            </li>
            {contacts.length - 1 !== contIdx && <hr className="m-1" />}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ContactListComponent;
