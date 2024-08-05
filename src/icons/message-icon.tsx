import { IconProps } from "./types";

export const MessageIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.07733 12.6673C2.77867 12.6673 2.52444 12.5624 2.31467 12.3527C2.10489 12.1429 2 11.8889 2 11.5907V4.41065C2 4.11287 2.10489 3.85887 2.31467 3.64865C2.52444 3.43887 2.77867 3.33398 3.07733 3.33398H12.9233C13.2211 3.33398 13.4751 3.43887 13.6853 3.64865C13.8951 3.85843 14 4.11265 14 4.41132V7.24798C14 7.39154 13.9711 7.5311 13.9133 7.66665C13.8556 7.80221 13.778 7.91821 13.6807 8.01465L10.3293 11.3533L9.18333 10.2067C8.97889 10.0027 8.72644 9.90065 8.426 9.90065C8.12556 9.90065 7.87289 10.0029 7.668 10.2073L6.80267 11.0727C6.63822 11.2367 6.54911 11.434 6.53533 11.6647C6.52111 11.8958 6.56911 12.1142 6.67933 12.32C6.72289 12.4 6.72689 12.4778 6.69133 12.5533C6.65578 12.6289 6.59356 12.6669 6.50467 12.6673H3.07733ZM8 7.33398L3.21333 4.21398C3.12667 4.15976 3.03733 4.14976 2.94533 4.18398C2.85333 4.21821 2.79467 4.28243 2.76933 4.37665C2.73511 4.44243 2.72956 4.50843 2.75267 4.57465C2.77578 4.64087 2.81889 4.6931 2.882 4.73132L7.70133 7.88665C7.79556 7.94443 7.89511 7.97332 8 7.97332C8.10489 7.97332 8.20444 7.94443 8.29867 7.88665L13.118 4.73132C13.1811 4.68465 13.2242 4.62798 13.2473 4.56132C13.2704 4.4951 13.2649 4.4291 13.2307 4.36332C13.2053 4.26954 13.1467 4.20776 13.0547 4.17798C12.9627 4.14821 12.8736 4.15998 12.7873 4.21332L8 7.33398ZM10.326 13.2367L13.882 9.67998C13.9531 9.60887 14.0318 9.57332 14.118 9.57332C14.2042 9.57332 14.2829 9.60887 14.354 9.67998C14.4251 9.7511 14.4607 9.82976 14.4607 9.91598C14.4607 10.0022 14.4251 10.0809 14.354 10.152L10.7027 13.8033C10.6444 13.8611 10.5851 13.9024 10.5247 13.9273C10.4638 13.9522 10.3973 13.9647 10.3253 13.9647C10.2533 13.9647 10.1873 13.9522 10.1273 13.9273C10.0673 13.9024 10.0078 13.8611 9.94867 13.8033L8.19 12.044C8.11889 11.9729 8.08333 11.8942 8.08333 11.808C8.08333 11.7218 8.11889 11.6433 8.19 11.5727C8.26111 11.502 8.33978 11.4664 8.426 11.466C8.51222 11.4655 8.59067 11.5011 8.66133 11.5727L10.326 13.2367Z"
        fill={color ?? "#409FD5"}
      />
    </svg>
  );
};
