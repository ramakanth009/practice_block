import React from "react";
import "./navbar.css";
import Flag from "./flag";

const NavBar = () => {
  return (
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h4 class="text-white">Collapsed content</h4>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="signulu">
          <svg
            width="108"
            height="32"
            viewBox="0 0 108 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.178 12.2863C29.6611 12.1009 29.1158 11.9977 28.5639 11.9809C28.1247 11.9602 27.6892 12.0666 27.3145 12.2863C27.1679 12.3702 27.0472 12.4898 26.9649 12.6328C26.8826 12.7758 26.8415 12.9371 26.846 13.1002C26.8416 13.2408 26.8671 13.3809 26.9207 13.512C26.9743 13.643 27.0551 13.7624 27.1581 13.8631C27.3876 14.072 27.6514 14.2437 27.9389 14.3715C28.3596 14.5564 28.7949 14.7093 29.2408 14.829C29.8973 15.0093 30.5408 15.2301 31.1672 15.4901C31.6835 15.6986 32.1197 16.0539 32.4164 16.5076C32.7894 17.0116 32.973 17.6211 32.9368 18.2371C32.9394 18.8722 32.7401 19.4931 32.3645 20.0176C31.9801 20.5496 31.4354 20.9575 30.8024 21.1871C30.0734 21.4627 29.2954 21.601 28.5113 21.5943C27.6156 21.6025 26.7283 21.4293 25.908 21.0859C25.0805 20.7865 24.3206 20.3386 23.6696 19.7664L24.6068 17.9351C25.18 18.4333 25.8296 18.8451 26.533 19.1562C27.1677 19.4462 27.8604 19.6023 28.5639 19.6137C29.0774 19.6486 29.5889 19.5235 30.0216 19.2574C30.1819 19.1587 30.3136 19.0231 30.4046 18.8631C30.4955 18.7031 30.5428 18.5238 30.5421 18.3417C30.5422 18.0431 30.4316 17.7541 30.2299 17.5258C29.9898 17.3057 29.7067 17.133 29.3965 17.0174C28.958 16.8456 28.5051 16.7094 28.0427 16.6101C27.3862 16.4299 26.7427 16.209 26.1164 15.949C25.6235 15.7305 25.1945 15.3997 24.867 14.9858C24.494 14.4819 24.3106 13.8724 24.3465 13.2563C24.3248 12.6374 24.5099 12.0278 24.8749 11.5158C25.2399 11.0037 25.7661 10.6156 26.3774 10.4075C27.0881 10.1317 27.8492 9.99327 28.6165 10.0003C29.3569 10.002 30.0933 10.1048 30.8031 10.3057C31.4866 10.5011 32.1359 10.7926 32.7292 11.1705L31.844 13.0527C31.3213 12.7373 30.7623 12.4802 30.178 12.2863Z"
              fill="url(#paint0_linear_378_4353)"
            />
            <path
              d="M37.6655 10H39.852V21.191H37.6655V10Z"
              fill="url(#paint1_linear_378_4353)"
            />
            <path
              d="M53.0673 15.749H54.9938V20.0219C54.3542 20.4959 53.6314 20.8577 52.8592 21.0903C52.088 21.3443 51.28 21.4817 50.4643 21.4975C49.3872 21.5103 48.3262 21.2468 47.3922 20.7346C46.4796 20.2405 45.7241 19.5197 45.2058 18.6487C44.6801 17.7655 44.4105 16.7646 44.4249 15.749C44.4036 14.7259 44.6928 13.7187 45.2586 12.8493C45.7965 11.9759 46.5695 11.2557 47.4978 10.7634C48.4501 10.2509 49.5281 9.9877 50.6213 10.0004C51.4545 10.012 52.2803 10.1494 53.0682 10.4077C53.8303 10.6754 54.5357 11.0715 55.1508 11.5772L53.9014 13.154C53.4634 12.7486 52.9521 12.4223 52.392 12.1909C51.8458 11.9759 51.2643 11.8552 50.6741 11.8345C49.9765 11.8156 49.289 11.9924 48.6957 12.3429C48.0994 12.6809 47.599 13.1534 47.2383 13.7188C46.884 14.3062 46.7043 14.9745 46.7178 15.652C46.6973 16.3303 46.8779 17.0002 47.2383 17.5852C47.5685 18.1729 48.0763 18.6523 48.6957 18.9611C49.2916 19.3055 49.9774 19.4818 50.6741 19.4695C51.0999 19.4714 51.523 19.4015 51.9235 19.2631C52.358 19.1371 52.7768 18.9667 53.1729 18.7547V15.7531L53.0673 15.749Z"
              fill="url(#paint2_linear_378_4353)"
            />
            <path
              d="M67.1037 10H69.2382V21.191H67.1556L61.2724 13.459V21.191H59.1375V10H61.2205L67.1037 17.7319V10Z"
              fill="url(#paint3_linear_378_4353)"
            />
            <path
              d="M75.4023 18.6985C75.6746 18.9574 76.0004 19.159 76.359 19.2904C76.7176 19.4218 77.1015 19.4801 77.485 19.4615C77.8614 19.485 78.2388 19.4288 78.59 19.2969C78.9411 19.165 79.2574 18.9607 79.5161 18.6985C79.7757 18.414 79.9737 18.0831 80.0989 17.7251C80.2241 17.3671 80.2734 16.989 80.2446 16.6126V10H82.4315V16.6126C82.4542 17.4981 82.2391 18.3745 81.8064 19.1581C81.4042 19.8562 80.8104 20.4365 80.0885 20.8367C79.2714 21.2459 78.3548 21.439 77.433 21.396C76.5139 21.4142 75.6039 21.2224 74.7781 20.8367C74.0186 20.4675 73.3996 19.8804 73.0074 19.1581C72.5746 18.3745 72.3596 17.4981 72.3822 16.6126V10H74.5691V16.6126C74.618 17.3727 74.9085 18.1003 75.4023 18.6985Z"
              fill="url(#paint4_linear_378_4353)"
            />
            <path
              d="M85.6802 10H87.8666V19.2585H92.8127V21.1916H85.6802V10Z"
              fill="url(#paint5_linear_378_4353)"
            />
            <path
              d="M98.8822 18.6985C99.1544 18.9573 99.4803 19.159 99.8389 19.2904C100.198 19.4218 100.581 19.4801 100.965 19.4615C101.342 19.485 101.719 19.4288 102.07 19.2969C102.421 19.165 102.737 18.9607 102.996 18.6985C103.256 18.4139 103.454 18.0831 103.579 17.7251C103.704 17.3671 103.754 16.989 103.725 16.6126V10H105.911V16.6126C105.934 17.4981 105.719 18.3745 105.286 19.1581C104.884 19.8562 104.29 20.4365 103.568 20.8367C102.751 21.2459 101.835 21.439 100.913 21.396C99.9942 21.4141 99.0837 21.2224 98.2579 20.8367C97.4984 20.4674 96.8794 19.8804 96.4872 19.1581C96.0545 18.3745 95.8394 17.4981 95.8625 16.6126V10H98.049V16.6126C98.0498 17.3819 98.346 18.124 98.8822 18.6985Z"
              fill="url(#paint6_linear_378_4353)"
            />
            <path
              d="M11.8577 6.00145C12.0151 6.11647 12.166 6.24007 12.3098 6.3717C13.9068 8.00664 15.5037 9.62574 17.0857 11.2611C17.1901 11.358 17.2679 11.4801 17.3116 11.6157C17.344 11.7297 17.3345 11.8515 17.2847 11.959C17.2349 12.0666 17.1483 12.1527 17.0405 12.2018C16.9435 12.2631 16.8278 12.2874 16.7144 12.2704C16.601 12.2534 16.4975 12.1962 16.4228 12.1092L15.4284 11.0913C15.3844 11.0351 15.3488 10.9728 15.3228 10.9063C15.2928 10.9217 15.2625 10.9217 15.2325 10.9371C15.1269 11.3074 14.9914 11.6929 14.901 12.0635C14.7432 12.8609 14.7127 13.6782 14.8107 14.4851C14.886 15.2408 14.9916 15.9965 15.0819 16.7524C15.1272 17.0918 14.9916 17.2923 14.6451 17.4158L5.51511 20.654C4.70157 20.946 3.87299 21.2401 3.05943 21.5177C2.95121 21.5575 2.84553 21.6038 2.74298 21.6564C2.62889 21.7063 2.50069 21.7135 2.38175 21.6767C2.2628 21.6399 2.16106 21.5616 2.09506 21.456C2.02189 21.3479 1.98931 21.2174 2.00309 21.0876C2.01687 20.9578 2.07613 20.8371 2.17037 20.7468C3.33062 19.5743 4.47543 18.4022 5.63631 17.2299C6.75109 16.0885 7.86608 14.9473 8.98085 13.8213C9.23702 13.5591 9.53825 13.5437 9.76437 13.775C9.85927 13.8701 9.915 13.9974 9.92056 14.1316C9.92612 14.2658 9.88112 14.3972 9.79439 14.4999C9.74812 14.5549 9.69779 14.6065 9.64379 14.654C8.01668 16.3507 6.38959 18.0011 4.77749 19.6667C4.72533 19.7197 4.68432 19.7826 4.65691 19.8517C4.89807 19.7745 5.13901 19.6821 5.38014 19.6049C8.19671 18.6027 10.9991 17.5991 13.8163 16.6129C13.9669 16.5503 14.0272 16.5049 13.9971 16.3209C13.8339 15.337 13.7533 14.3412 13.756 13.3439C13.7575 12.2918 13.9944 11.2534 14.4492 10.3047C14.4795 10.2618 14.4918 10.2086 14.4833 10.1567C14.4749 10.1048 14.4463 10.0583 14.4039 10.0273C14.0875 9.71875 13.7712 9.39481 13.4698 9.07109C13.4353 9.0219 13.3831 8.98794 13.3241 8.97627C13.2652 8.96461 13.204 8.97616 13.1533 9.00851C12.075 9.53281 10.887 9.79192 9.68823 9.76422C8.90471 9.73336 8.13642 9.61008 7.36813 9.51747C7.18729 9.48659 7.09695 9.51747 7.03666 9.71792C6.2533 12.0782 5.45968 14.4434 4.65589 16.8136C4.5353 17.153 4.35465 17.3071 4.09849 17.2917C3.70673 17.2762 3.49583 16.9214 3.6164 16.5199C3.84232 15.8566 4.06845 15.178 4.29437 14.5147C4.92707 12.6176 5.57497 10.7204 6.20767 8.82327C6.34326 8.4061 6.52413 8.29888 6.94591 8.36062C7.62389 8.45324 8.28683 8.57651 8.96479 8.63827C10.1207 8.77191 11.2916 8.61305 12.37 8.17623C12.4335 8.15207 12.4942 8.12101 12.5509 8.08361C12.3853 7.92946 12.2345 7.82141 12.0989 7.68249C11.8736 7.46681 11.6468 7.23527 11.4355 7.00394C11.1044 6.66478 11.1798 6.26365 11.6024 6.06403C11.6174 6.0486 11.6324 6.03316 11.6477 6.03316C11.7143 6.00665 11.7862 5.99581 11.8577 6.00145Z"
              fill="#CA9731"
            />
            <path
              d="M9.26722 24.7568C9.24033 24.815 9.21017 24.8716 9.17688 24.9264C8.99601 25.1423 8.81539 25.3736 8.61951 25.5897C8.55622 25.6733 8.46907 25.7358 8.36955 25.7688C8.27003 25.8018 8.16281 25.8039 8.06211 25.7747C7.96793 25.7531 7.8827 25.703 7.81803 25.6312C7.75334 25.5595 7.71233 25.4695 7.70059 25.3736C7.6886 25.2173 7.72532 25.0612 7.80572 24.9266C8.0016 24.649 8.22753 24.3868 8.45365 24.1246C8.57029 23.983 8.7203 23.8727 8.89018 23.8036C9.06006 23.7345 9.24446 23.7087 9.42679 23.7286C9.60911 23.7485 9.78361 23.8134 9.93459 23.9175C10.0856 24.0216 10.2083 24.1617 10.2917 24.325C10.3369 24.4022 10.367 24.4792 10.4122 24.5409C10.4575 24.6026 10.5025 24.649 10.5478 24.7105C10.5837 24.6572 10.614 24.6004 10.6382 24.5409C10.7587 24.1707 10.8641 23.7852 10.9846 23.4145C11.0517 23.2027 11.1736 23.0124 11.3379 22.8629C11.5022 22.7134 11.7031 22.6099 11.9202 22.5629C12.1374 22.516 12.363 22.5272 12.5744 22.5955C12.7858 22.6638 12.9755 22.7867 13.1241 22.9519C13.2115 23.0477 13.2828 23.1571 13.335 23.2758C13.5006 23.5998 13.6665 23.9083 13.8321 24.232C14.0882 24.7101 14.5401 24.8027 14.9468 24.4633C15.2181 24.232 15.5042 24.232 15.7151 24.4787C15.7658 24.5356 15.8038 24.6025 15.8269 24.6751C15.8499 24.7477 15.8574 24.8243 15.8489 24.8999C15.8404 24.9756 15.816 25.0486 15.7774 25.1142C15.7388 25.1798 15.6868 25.2366 15.6248 25.2808C15.4316 25.4609 15.1997 25.5943 14.9468 25.6706C14.6939 25.7469 14.4269 25.7641 14.1663 25.7209C13.9058 25.6777 13.6586 25.5752 13.4439 25.4214C13.2292 25.2675 13.0527 25.0664 12.928 24.8336C12.7471 24.5096 12.5815 24.155 12.4007 23.8311C12.3787 23.7828 12.3452 23.7407 12.3032 23.7085C12.2611 23.6762 12.2118 23.6548 12.1595 23.6461C12.0239 23.6306 11.9636 23.7541 11.9336 23.8774C11.828 24.2476 11.7077 24.6177 11.6021 24.9879C11.5476 25.2096 11.4256 25.4088 11.2528 25.5581C11.0801 25.7073 10.8652 25.7991 10.6379 25.8208C10.4073 25.8452 10.1748 25.7974 9.97244 25.6841C9.77008 25.5709 9.60779 25.3977 9.50795 25.1884C9.44766 25.0649 9.38737 24.957 9.32708 24.8338C9.32748 24.7877 9.29724 24.7722 9.26722 24.7568Z"
              fill="#CA9731"
            />
            <path
              d="M5.06283 25.2348C5.06283 25.095 5.1184 24.9609 5.21729 24.862C5.31619 24.7631 5.45032 24.7075 5.59018 24.7075C5.73004 24.7075 5.86417 24.7631 5.96307 24.862C6.06197 24.9609 6.11753 25.095 6.11753 25.2348C6.11745 25.3759 6.06226 25.5112 5.96374 25.6121C5.8652 25.713 5.73114 25.7713 5.59018 25.7747C5.51998 25.7743 5.45054 25.76 5.3859 25.7326C5.3213 25.7052 5.26273 25.6652 5.21368 25.615C5.16462 25.5647 5.12604 25.5053 5.10014 25.44C5.07422 25.3748 5.06156 25.305 5.06283 25.2348Z"
              fill="#CA9731"
            />
            <path
              d="M10.773 13.3122C10.7028 13.3097 10.6338 13.2933 10.5699 13.264C10.5061 13.2347 10.4487 13.193 10.401 13.1414C10.3534 13.0897 10.3165 13.0292 10.2924 12.9632C10.2683 12.8972 10.2575 12.8271 10.2607 12.7569C10.2672 12.6169 10.327 12.4846 10.4278 12.3871C10.5286 12.2896 10.6628 12.2344 10.803 12.2325C10.9435 12.2403 11.0754 12.3027 11.1707 12.4062C11.2659 12.5097 11.317 12.6463 11.3131 12.787C11.3092 12.9276 11.2505 13.0612 11.1497 13.1592C11.0488 13.2573 10.9137 13.3122 10.773 13.3122Z"
              fill="#CA9731"
            />
            <defs>
              <linearGradient
                id="paint0_linear_378_4353"
                x1="34.6102"
                y1="15.7509"
                x2="-52.1005"
                y2="16.0179"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_378_4353"
                x1="40.2455"
                y1="15.5507"
                x2="19.7967"
                y2="15.5661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_378_4353"
                x1="57.0816"
                y1="15.703"
                x2="-43.237"
                y2="16.0633"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_378_4353"
                x1="71.0564"
                y1="15.5507"
                x2="-23.4065"
                y2="15.879"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_378_4353"
                x1="84.2423"
                y1="15.6554"
                x2="-9.76639"
                y2="15.9744"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_378_4353"
                x1="94.097"
                y1="15.5511"
                x2="27.3904"
                y2="15.7147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_378_4353"
                x1="107.722"
                y1="15.6554"
                x2="13.7135"
                y2="15.9744"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A2434" />
                <stop offset="1" stop-color="#1A2434" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flagside">
          <div className="theflag">
            <Flag />
          </div>
          <select className="flagmenu">
            {/* <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option> */}
          </select>
        </div>
        <div className="bell1">
          <div className="bell">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E1E2E6"
              />
              <path
                d="M15.1602 9.1875C15.1602 8.96875 15.3789 8.75 15.5977 8.75C15.8438 8.75 16.0625 8.96875 16.0625 9.1875V9.65234C18.25 9.87109 20 11.7305 20 14V14.8203C20 15.9961 20.4648 17.1445 21.3125 17.9922L21.3945 18.0742C21.6133 18.293 21.75 18.5938 21.75 18.9219C21.75 19.6055 21.2031 20.125 20.5195 20.125H10.7031C10.0195 20.125 9.5 19.6055 9.5 18.9219C9.5 18.5938 9.60938 18.293 9.82812 18.0742L9.91016 17.9922C10.7578 17.1445 11.25 15.9961 11.25 14.8203V14C11.25 11.7305 12.9727 9.87109 15.1875 9.65234L15.1602 9.1875ZM15.5977 10.5C13.6836 10.5 12.0977 12.0859 12.0977 14V14.8203C12.0977 16.2422 11.5508 17.6094 10.5391 18.6211L10.457 18.6758C10.4023 18.7578 10.3477 18.8398 10.3477 18.9219C10.3477 19.1133 10.5117 19.25 10.7031 19.25H20.5195C20.7109 19.25 20.875 19.1133 20.875 18.9219C20.875 18.8398 20.8203 18.7578 20.7656 18.6758L20.6836 18.6211C19.6719 17.6094 19.125 16.2422 19.125 14.8203V14C19.125 12.0859 17.5391 10.5 15.5977 10.5ZM15.5977 21.875C15.9805 21.875 16.3086 21.6562 16.4453 21.3008C16.5273 21.082 16.7734 20.9453 16.9922 21.0273C17.2109 21.1094 17.3477 21.3555 17.2656 21.6016C17.0195 22.2852 16.3633 22.75 15.5977 22.75C14.8594 22.75 14.2031 22.2852 13.957 21.6016C13.875 21.3555 14.0117 21.1094 14.2305 21.0273C14.4492 20.9453 14.6953 21.082 14.7773 21.3008C14.9141 21.6562 15.2422 21.875 15.5977 21.875Z"
                fill="#666E80"
              />
            </svg>
          </div>
        </div>
        <div className="profile"></div>
      </nav>
    </div>
  );
};

export default NavBar;
