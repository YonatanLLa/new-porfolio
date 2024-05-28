import React from "react";

export const Download = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5">
        <path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" />
        <path
          id="arrow"
          strokeLinejoin="round"
          d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"
        />
      </g>
    </svg>
  );
};

export const Location = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-map-pins"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
      <path d="M8 7l0 .01" />
      <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
      <path d="M16 15l0 .01" />
    </svg>
  );
};

export const Autodidacta = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-code"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  );
};

export const Scoold = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-school"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
  );
};

export const Course = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-certificate-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M10 7h4" />
      <path d="M10 18v4l2 -1l2 1v-4" />
      <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
    </svg>
  );
};

export const WhatsApp = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
};

export const Telegram = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </svg>
  );
};

export const Flag = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill={color} d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7z" />
    </svg>
  );
};

export const Startup = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14 14"
    >
      <path
        fill={color}
        fill-rule="evenodd"
        d="m6.547 10.263l-2.81-2.81c.309-.517.617-1.052.922-1.584c1.016-1.766 2.008-3.49 2.938-4.387c2.524-2.524 5.981-1.06 5.981-1.06s1.463 3.457-1.06 5.981c-.89.922-2.587 1.9-4.34 2.908c-.546.315-1.097.632-1.631.952m2.14-6.532a1.582 1.582 0 1 1 3.164 0a1.582 1.582 0 0 1-3.163 0Zm-4.09-.232c-1.418-.377-2.749.321-3.93 1.404a.48.48 0 0 0 .089.765l1.905 1.148l.002-.004c.275-.46.582-.993.894-1.533c.355-.617.716-1.243 1.04-1.78m2.587 7.84l1.148 1.905a.48.48 0 0 0 .765.088c1.083-1.18 1.782-2.512 1.404-3.93c-.522.314-1.07.63-1.613.943l-.083.048c-.548.316-1.091.628-1.616.943zM2.622 9.343a2 2 0 0 1 1.402 3.46c-.222.212-.569.378-.89.506a10.47 10.47 0 0 1-1.1.358c-.367.1-.717.18-.982.233a5.991 5.991 0 0 1-.336.059a2.99 2.99 0 0 1-.133.013a.54.54 0 0 1-.198-.022a.509.509 0 0 1-.241-.156a.508.508 0 0 1-.11-.22a.547.547 0 0 1-.012-.176c.003-.04.009-.086.015-.128c.013-.088.033-.203.06-.334c.053-.264.135-.612.235-.977c.1-.364.222-.754.359-1.095c.128-.321.294-.667.506-.888a2 2 0 0 1 1.425-.633"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const Estrella = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M11.58 4.776c.695-1.77 1.042-2.656 1.769-2.765c.726-.11 1.35.63 2.6 2.109l.322.382c.355.42.533.63.774.75s.519.137 1.075.17l.505.029c1.955.114 2.933.172 3.272.81c.34.64-.184 1.438-1.232 3.033l-.27.413c-.299.453-.447.68-.488.939c-.04.258.033.52.18 1.043l.132.477c.514 1.842.77 2.762.253 3.266c-.516.505-1.464.258-3.36-.235l-.491-.127c-.539-.14-.808-.21-1.075-.17c-.266.04-.498.185-.964.476l-.423.265c-1.638 1.024-2.457 1.536-3.115 1.208c-.659-.327-.721-1.277-.846-3.177l-.032-.492c-.035-.54-.053-.81-.177-1.044c-.125-.234-.341-.406-.775-.75l-.395-.312C7.294 9.865 6.531 9.26 6.641 8.554c.11-.707 1.02-1.047 2.838-1.729l.471-.176c.517-.194.776-.29.965-.475c.19-.185.288-.437.485-.94zM5.31 9.593C2.873 11.92 1.275 15.806 2.331 22c.943-2.603 3.526-4.76 6.581-6.047c-.106-.593-.154-1.317-.204-2.08l-.039-.595a21.92 21.92 0 0 0-.032-.43a24.53 24.53 0 0 0-.355-.287l-.474-.375c-.694-.55-1.34-1.06-1.783-1.532c-.253-.269-.536-.624-.715-1.061"
      />
      <path fill={color} d="m10.347 15.423l-.015-.114l.056.101z" />
    </svg>
  );
};
