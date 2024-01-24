import { useNavigate } from "react-router-dom";

const Logo = ({ size }: { size: number }) => {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate("/")}
      width={`${size}`}
      viewBox="0 0 164 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0272 10.6776L17.6822 10.148C19.1827 10.148 19.933 12.134 19.933 16.106L21.9852 31.398L22.25 31.6628L29.8629 28.8824C30.8779 28.8824 31.4296 29.6548 31.5179 31.1994C31.5179 32.3469 28.7154 33.737 23.1106 35.37L22.8458 35.5024V35.7672C22.8458 36.6939 24.3021 41.5265 27.2149 50.2648V50.3972C27.2149 51.2357 26.5309 51.9418 25.1627 52.5156C23.8829 52.5156 23.0444 50.993 22.6472 47.9478C21.6321 45.7412 20.3964 42.1002 18.94 37.0249H18.6752C12.8938 38.2165 10.0031 39.2316 10.0031 40.0701C6.82554 46.9548 4.4203 50.3972 2.78738 50.3972C1.86059 50.3972 1.30893 49.8014 1.1324 48.6098C1.1324 47.5506 2.30192 45.4764 4.64096 42.3871L5.70015 40.0701H4.04517L2.78738 40.3349C1.15446 39.9377 0.338007 39.0992 0.338007 37.8193C1 36.2747 1.97092 35.5024 3.25078 35.5024L4.90576 36.1644C7.3772 36.1644 8.61292 35.2596 8.61292 33.4502C10.8637 28.1542 13.3351 20.5634 16.0272 10.6776ZM16.623 22.7259L12.7173 34.5094C16.3362 33.8032 18.1456 33.1192 18.1456 32.4572C17.4836 25.9697 16.9761 22.7259 16.623 22.7259ZM41.6251 30.3388C46.3032 30.3388 49.0615 33.2737 49.9001 39.1433C49.9001 44.351 47.4727 48.0802 42.6181 50.331C42.0885 50.5958 41.3603 50.7282 40.4336 50.7282H39.9702L38.5138 50.5958V50.7282L38.7786 68.4034C38.4696 69.7715 37.7635 70.4556 36.6602 70.4556C35.4245 70.0584 34.8066 69.4185 34.8066 68.5358L34.2108 32.5234C34.2108 31.3759 34.8949 30.7801 36.263 30.736L37.6532 31.3318C38.8889 30.6698 40.2129 30.3388 41.6251 30.3388ZM38.3152 37.3559L38.1166 39.4081L38.3152 46.4252L40.1688 46.8886C43.1257 46.8886 45.0454 44.7261 45.9281 40.4011V39.4081C45.6192 35.9216 44.3834 34.1784 42.2209 34.1784H41.2279C39.2861 34.1784 38.3152 35.2376 38.3152 37.3559ZM53.8006 15.5102C55.4777 15.8632 56.3162 16.6135 56.3162 17.761C55.8749 18.9967 55.1688 19.6145 54.1978 19.6145C52.5649 19.3056 51.7485 18.4891 51.7485 17.1652C52.1898 16.0618 52.8738 15.5102 53.8006 15.5102ZM56.3162 24.7781C57.0223 24.7781 57.6181 25.418 58.1036 26.6979L57.5078 31.398V34.5094C57.5078 38.1283 58.1257 42.8725 59.3614 48.7422C58.92 49.5807 58.1698 50 57.1106 50C55.3012 50 54.1096 44.7041 53.5358 34.1122V31.7952C53.5358 27.1171 54.4626 24.7781 56.3162 24.7781ZM82.4292 0.284349C83.1354 0.284349 83.7753 0.968409 84.349 2.33653C84.349 3.39572 82.7382 4.27837 79.5165 4.9845C75.4562 7.23527 72.3007 11.1631 70.05 16.768C67.8433 22.3728 66.74 27.9115 66.74 33.384C66.74 42.1664 69.5645 47.8154 75.2135 50.331L77.3319 50.7282C82.0541 50.7282 85.4082 46.6018 87.3942 38.3489L87.659 35.6348C87.659 32.1041 86.4674 29.1472 84.0842 26.7641H83.687C82.7602 27.8232 80.9067 31.5525 78.1263 37.9517L76.6699 38.9447C75.4342 38.9447 74.7281 38.1945 74.5515 36.6939C78.7441 26.7641 81.5907 21.7991 83.0912 21.7991H83.4884C88.8726 24.9325 91.5647 29.5444 91.5647 35.6348C91.5647 42.5195 88.7402 48.2568 83.0912 52.8466C82.1644 53.641 80.2888 54.2368 77.4643 54.6339C72.1242 54.6339 67.7109 50.7723 64.2244 43.0491C63.2976 39.7391 62.8343 36.716 62.8343 33.9798V32.9868C62.8343 23.5424 65.8574 14.6275 71.9036 6.24229C75.8314 2.27033 79.3399 0.284349 82.4292 0.284349ZM103.313 23.9175C106.093 23.9175 107.748 25.8593 108.278 29.743V30.3388C108.278 34.6197 106.071 38.5475 101.658 42.1223C104.218 44.6379 108.697 45.8956 115.097 45.8956C116.067 46.2046 116.553 46.8886 116.553 47.9478C116.553 49.1394 115.781 49.7352 114.236 49.7352C109.911 49.7352 105.365 48.6319 100.599 46.4252V48.345C100.599 52.8907 99.6279 55.1635 97.6861 55.1635C96.318 55.1635 95.6339 52.5376 95.6339 47.2858V42.1223L95.4353 40.2687L95.8987 38.1503L95.4353 31.7952V31.5304C95.4353 30.3388 96.0532 29.5224 97.2889 29.081C99.0101 25.6387 101.018 23.9175 103.313 23.9175ZM100.003 38.4151C101.283 38.4151 102.717 36.1202 104.306 31.5304V28.6838L103.512 27.8232H102.916C100.974 29.1472 100.003 32.6779 100.003 38.4151ZM131.132 24.4471C133.074 24.4471 134.045 25.2194 134.045 26.7641L133.449 28.0218L133.052 40.1363C133.052 45.6088 134.155 49.007 136.362 50.331L136.494 51.324C136.362 52.6038 135.766 53.2438 134.707 53.2438H134.31C131 50.993 129.345 47.5506 129.345 42.9167H128.881C127.116 47.8596 124.976 50.331 122.46 50.331C120.121 49.669 118.952 47.9258 118.952 45.1013C118.952 38.8785 121.445 32.6779 126.432 26.4993C128.109 25.1311 129.676 24.4471 131.132 24.4471ZM123.122 42.4533L122.857 44.3069V45.5646H123.519C126.829 37.3118 128.484 32.2807 128.484 30.4712H128.219C125.66 33.3399 123.961 37.3339 123.122 42.4533ZM139.142 26.8303C139.451 25.7269 140.157 25.1753 141.26 25.1753C142.364 25.1753 143.092 26.2786 143.445 28.4852H143.71L146.755 27.8232C148.167 27.8232 149.535 29.1472 150.859 31.7952H151.124C153.066 28.75 155.052 27.2275 157.082 27.2275C161.407 28.0218 163.569 30.8463 163.569 35.701L163.702 38.0179L163.106 51.3902V52.648C163.106 53.7513 162.422 54.3912 161.054 54.5677C159.686 54.5677 159.002 52.9569 159.002 49.7352L159.796 37.7531C159.796 33.3399 158.759 31.1332 156.685 31.1332C155.493 31.1332 154.059 34.0239 152.382 39.8053C151.543 46.4252 150.859 49.7352 150.33 49.7352C149.579 49.7352 149.204 49.8897 149.204 50.1986C147.836 50.0221 147.152 49.3159 147.152 48.0802L148.013 40.0701C147.88 34.5535 147.328 31.7952 146.358 31.7952H146.159C145.056 32.6337 144.504 34.2887 144.504 36.7601V40.2687L144.239 50.3972C143.93 51.5005 143.246 52.0522 142.187 52.0522C141.26 52.0522 140.664 51.2799 140.4 49.7352L140.135 41.9237L140.532 35.5024C140.267 32.1924 139.804 29.3017 139.142 26.8303Z"
        className="fill-foreground"
      />
    </svg>
  );
};

export default Logo;
