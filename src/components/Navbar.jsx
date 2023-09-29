import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navbarData } from "../data";
import { TbPokeball } from "react-icons/tb";
import "./Navbar.css";
import { findIcon } from "./findIcon";
import { useAppState } from "../StateContext";
export default function Header() {
  const { state, dispatch } = useAppState();
  const location = useLocation();

  return (
    <div
      className="navbar df col"
      style={{
        justifyContent: "space-between",
        overflowX: "hidden",
        width: state.close ? "80px" : "150px",
      }}
    >
      <div
        className={`df aic ${state.close ? "col" : ""}`}
        style={{
          padding: "0 10px",
        }}
      >
        <TbPokeball
          style={{
            width: "40px",
            height: "80px",
          }}
          className="navbar-link"
          cursor={"pointer"}
          onClick={() => dispatch({ selection: "close", action: !state.close })}
        />
        <div
          className="df aic jcc col navbar-link"
          style={{
            cursor: "pointer",
            fontWeight: 700,
            fontSize: state.close ? "1rem" : "1.2rem",
          }}
          onClick={() => dispatch({ selection: "close", action: !state.close })}
        >
          <span>{navbarData.title}</span>
          <span>{navbarData.title2}</span>
        </div>
      </div>
      <div className="df col">
        {navbarData.links.slice(0, 4).map((e, i) => (
          <div
            className="df col"
            style={{
              borderBottom: "1px solid var(--whitesmoke)",
              width: "100%",
              margin: i === 1 ? "10px 0 30px 0" : "10px 0 0  0",
            }}
          >
            <Link
              to={e.path}
              className="df aic navbar-link"
              style={{
                color: location.pathname === e.path && "var(--green)",
                width: "100%",
                padding: "15px 30px",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {findIcon(e.name, state.close)}
              {!state.close && (
                <span
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  {e.name}
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link
          className="df aic navbar-link"
          style={{
            color:
              location.pathname ===
                navbarData.links[navbarData.links.length - 1].path &&
              "var(--green)",
            padding: "15px 30px",
            fontWeight: 700,
            fontSize: "1rem",
            borderTop: "1px solid var(--whitesmoke)",
          }}
          to={navbarData.links[navbarData.links.length - 1].path}
        >
          {findIcon(
            navbarData.links[navbarData.links.length - 1].name,
            state.close
          )}
          {!state.close && (
            <span
              style={{
                marginLeft: "5px",
              }}
            >
              {navbarData.links[navbarData.links.length - 1].name}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
