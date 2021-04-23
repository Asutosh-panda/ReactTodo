import React from "react";
import Check from "./Check";
import Note from "./Note";
import "./Todostart.css"

const Todostart=()=>{


    let value1={
        id:2220,
        title:"",
        status:true,
        date:""
    }
    let value2={
        id:2220,
        title:"",
        status:false,
        date:""
    }
    return <>
    <div className="Todostart" >
    
    <svg className="cardboard" width="855" height="650" viewBox="0 0 855 650" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="cardboard">
<g id="Group" opacity="0.5">
<path id="Vector" opacity="0.5" d="M623.955 44.9686H239.305V488.931H623.955V44.9686Z" fill="url(#paint0_linear)"/>
</g>
<path id="Vector_2" d="M245.699 49.739H617.562V480.89H245.699V49.739Z" fill="#4A408C" stroke="black" stroke-width="3"/>
<path id="Vector_3" d="M525.101 36.7761H339.138V74.4025H525.101V36.7761Z" fill="url(#paint1_linear)"/>
<path id="Vector_4" d="M432.12 0C417.761 0 406.124 9.95849 406.124 22.239C406.124 34.5195 417.761 44.478 432.12 44.478C446.478 44.478 458.115 34.5195 458.115 22.239C458.115 9.95849 446.478 0 432.12 0ZM432.12 35.0673C429.067 35.134 426.059 34.4386 423.481 33.0702C420.904 31.7017 418.873 29.7223 417.649 27.3849C416.425 25.0475 416.063 22.4583 416.61 19.9481C417.156 17.438 418.586 15.121 420.717 13.2933C422.848 11.4655 425.583 10.21 428.572 9.68726C431.561 9.16449 434.669 9.3982 437.499 10.3585C440.328 11.3188 442.751 12.9621 444.457 15.0784C446.162 17.1946 447.074 19.6877 447.075 22.239C447.122 25.5953 445.574 28.8303 442.771 31.235C439.968 33.6396 436.137 35.0177 432.12 35.0673Z" fill="url(#paint2_linear)"/>
<path id="Vector_5" d="M523.144 36.7924H341.096V72.7673H523.144V36.7924Z" fill="#6C63FF"/>
<path id="Vector_6" d="M432.12 1.63522C427.087 1.63522 422.167 2.88198 417.982 5.21782C413.797 7.55366 410.535 10.8737 408.609 14.7581C406.683 18.6424 406.179 22.9167 407.161 27.0403C408.143 31.1639 410.567 34.9517 414.126 37.9247C417.684 40.8976 422.219 42.9222 427.155 43.7425C432.092 44.5627 437.208 44.1418 441.858 42.5328C446.508 40.9238 450.482 38.1992 453.279 34.7033C456.075 31.2075 457.567 27.0975 457.567 22.8931C457.567 17.2552 454.886 11.8481 450.114 7.86151C445.342 3.87488 438.869 1.63522 432.12 1.63522ZM432.12 35.1572C429.216 35.1572 426.378 34.438 423.963 33.0904C421.549 31.7428 419.667 29.8274 418.556 27.5864C417.445 25.3454 417.154 22.8795 417.721 20.5005C418.287 18.1215 419.685 15.9362 421.738 14.221C423.792 12.5058 426.408 11.3378 429.256 10.8646C432.103 10.3914 435.055 10.6342 437.738 11.5625C440.421 12.4907 442.714 14.0627 444.327 16.0795C445.94 18.0963 446.801 20.4675 446.801 22.8931C446.801 26.1457 445.254 29.2652 442.501 31.5652C439.748 33.8651 436.013 35.1572 432.12 35.1572Z" fill="#6C63FF"/>
<path id="Vector_7" d="M342.074 118.553H261.817V185.597H342.074V118.553Z" fill="url(#paint3_linear)"/>
<path id="Vector_8" d="M342.348 251.415H262.091V318.459H342.348V251.415Z" fill="url(#paint4_linear)"/>
<path id="Vector_9" d="M342.622 382.642H262.365V449.686H342.622V382.642Z" fill="url(#paint5_linear)"/>
<g id="boxs">
<path id="box1" d="M339.138 121.006H264.753V183.145H339.138V121.006Z" fill="white"/>
<path id="box2" d="M339.138 252.642H264.753V314.78H339.138V252.642Z" fill="white"/>
<path id="box3" d="M339.138 384.277H264.753V446.415H339.138V384.277Z" fill="white"/>
</g>
<path id="Vector_10" d="M490.033 140.187H388.076V146.131H490.033V140.187Z" fill="#E0E0E0"/>
<path id="Vector_11" d="M556.421 149.108H388.076V155.052H556.421V149.108Z" fill="#E0E0E0"/>
<path id="Vector_12" d="M544.569 158.02H388.076V163.964H544.569V158.02Z" fill="#E0E0E0"/>
<path id="Vector_13" d="M490.033 271.823H388.076V277.767H490.033V271.823Z" fill="#E0E0E0"/>
<path id="Vector_14" d="M556.421 280.743H388.076V286.687H556.421V280.743Z" fill="#E0E0E0"/>
<path id="Vector_15" d="M544.569 289.655H388.076V295.599H544.569V289.655Z" fill="#E0E0E0"/>
<path id="Vector_16" d="M490.033 403.458H388.076V409.402H490.033V403.458Z" fill="#E0E0E0"/>
<path id="Vector_17" d="M556.421 412.378H388.076V418.322H556.421V412.378Z" fill="#E0E0E0"/>
<path id="Vector_18" d="M544.569 421.29H388.076V427.234H544.569V421.29Z" fill="#E0E0E0"/>
<path id="Vector_19" d="M285.062 148.372L298.569 158.723L317.703 135.216L324.457 139.918L298.569 168.125L279.434 150.26L285.062 148.372Z" fill="url(#paint6_linear)"/>
<path id="Vector_20" d="M287.264 148.805L299.009 157.799L315.648 137.358L321.521 141.447L299.009 165.975L282.37 150.44L287.264 148.805Z" fill="white"/>
<path id="Vector_21" d="M287.264 281.258L299.009 290.252L315.648 269.811L321.521 273.899L299.009 298.428L282.37 282.893L287.264 281.258Z" fill="white"/>
<path id="Vector_22" d="M287.264 413.711L299.009 422.704L315.648 402.264L321.521 406.352L299.009 430.88L282.37 415.346L287.264 413.711Z" fill="white"/>

<g id="paths">
<path id="path3.1" opacity="0.5" d="M768.675 171.399L768.271 295.379L646 294.98" stroke="#A50DED" stroke-width="5" stroke-miterlimit="10" stroke-dasharray="12 12"/>
<path id="path1" opacity="0.5" d="M226.581 149.214H95.4285V252.233" stroke="#00A5C9" stroke-width="5" stroke-miterlimit="10" stroke-dasharray="12 12"/>
<path id="path2" opacity="0.5" d="M301.945 499.969V558.836H497.696" stroke="#007D14" stroke-width="5" stroke-miterlimit="10" stroke-dasharray="12 12"/>
</g>

<g id="Group_2" opacity="0.5">
<path id="Vector_28" opacity="0.5" d="M855 87.5579L779.577 34.3396L705.329 87.4434L704.663 87.1327V87.5579H704.154L704.663 87.795V87.983V156.948V157.799H854.491L853.581 157.374H855V87.5579Z" fill="url(#paint7_linear)"/>
</g>
<path id="Vector_29" d="M852.005 154.937H708.128V87.8931L779.577 36.7924L852.005 87.8931V154.937Z" fill="#DF0A0A"/>
<path id="Vector_30" d="M707.149 87.8931L778.598 121.415L851.026 87.8931" fill="#2338F0"/>
<g id="Group_3" opacity="0.5">
<path id="Vector_31" opacity="0.5" d="M780.086 120.573L736.023 143.899V56.4151H823.132V100.909L780.086 120.573Z" fill="url(#paint8_linear)"/>
</g>
<path id="Vector_32" d="M780.067 121.006L737.98 143.899V58.0503H821.174V101.711L780.067 121.006Z" fill="#F8F8F8"/>
<path id="Vector_33" opacity="0.05" d="M707.639 154.528H851.516L707.639 87.4843V154.528Z" fill="black"/>
<path id="Vector_34" d="M707.639 155.346H851.516L707.639 88.3019V155.346Z" fill="#1040EA"/>
<path id="Vector_35" d="M809.429 71.1321H748.747V74.4025H809.429V71.1321Z" fill="#FD11F3"/>
<path id="Vector_36" d="M809.429 77.6729H748.747V80.9434H809.429V77.6729Z" fill="#FA05C4"/>
<path id="Vector_37" d="M809.429 84.2138H748.747V87.4843H809.429V84.2138Z" fill="#B808E4"/>
<path id="Vector_38" d="M809.429 90.7547H748.747V94.0252H809.429V90.7547Z" fill="#E91FED"/>
<path id="Vector_39" d="M809.429 97.2956H748.747V100.566H809.429V97.2956Z" fill="#F363FF"/>
<path id="Vector_40" opacity="0.05" d="M821.174 102.201V100.566L778.364 120.442L779.528 120.982L821.174 102.201Z" fill="black"/>
<g id="Group_4" opacity="0.5">
<path id="Vector_41" opacity="0.5" d="M699.779 506.918H529.525V650H699.779V506.918Z" fill="url(#paint9_linear)"/>
</g>
<path id="Vector_42" d="M695.894 510.189H533.421V646.73H695.894V510.189Z" fill="#F5F5F5"/>
<path id="Vector_43" d="M687.085 514.277H544.187V618.931H687.085V514.277Z" fill="#0F8FB7"/>
<path id="Vector_44" d="M687.085 585.409C647.592 585.409 615.636 576.996 615.636 566.604C576.143 566.604 544.187 573.921 544.187 582.956V622.201H687.085V585.409Z" fill="#1D1AA3"/>
<path id="Vector_45" d="M663.595 549.434C671.703 549.434 678.276 543.943 678.276 537.17C678.276 530.396 671.703 524.906 663.595 524.906C655.487 524.906 648.914 530.396 648.914 537.17C648.914 543.943 655.487 549.434 663.595 549.434Z" fill="#E5FF44"/>
<g id="Group_5" opacity="0.5">
<path id="Vector_46" opacity="0.5" d="M199.666 261.431H0V379.575H199.666V261.431Z" fill="url(#paint10_linear)"/>
</g>
<path id="Vector_47" d="M193.793 264.906H5.87253V376.101H193.793V264.906Z" fill="#047981"/>
<path id="Vector_48" d="M103.699 292.982C102.128 292.985 100.559 293.072 99.0009 293.244L103.699 323.234L67.5731 321.223C67.5242 321.885 67.485 322.555 67.485 323.234C67.485 329.217 69.609 335.066 73.5882 340.041C77.5674 345.016 83.2233 348.893 89.8405 351.183C96.4577 353.472 103.739 354.072 110.764 352.904C117.789 351.737 124.241 348.856 129.306 344.625C134.371 340.394 137.82 335.004 139.217 329.136C140.614 323.268 139.897 317.185 137.156 311.657C134.415 306.129 129.774 301.405 123.818 298.081C117.863 294.757 110.861 292.982 103.699 292.982Z" fill="#0BAEE1"/>
<path id="Vector_49" d="M91.1709 287.521C82.8677 288.43 75.1983 291.714 69.4682 296.816C63.738 301.917 60.3013 308.52 59.7431 315.499L95.8689 317.511L91.1709 287.521Z" fill="#88E2FF"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="431.63" y1="488.931" x2="431.63" y2="44.9686" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="82441.9" y1="3460.78" x2="82441.9" y2="1729.21" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="31846.4" y1="4754.25" x2="31846.4" y2="2335.09" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="25021.3" y1="15337.6" x2="25021.3" y2="9839.94" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="25044.1" y1="26365.1" x2="25044.1" y2="20867.4" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="25066.8" y1="37256.9" x2="25066.8" y2="31759.3" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="14168.9" y1="6902.25" x2="14168.9" y2="5577.34" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="120853" y1="23861.9" x2="120853" y2="5219.62" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="70118.4" y1="15453.6" x2="70118.4" y2="6092.83" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="107449" y1="114257" x2="107449" y2="89217.6" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="20365.9" y1="55110.1" x2="20365.9" y2="38038.2" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
<div className="checks">
<Check/>
<Check/>
<Check/>
</div>
    </div>
  
    </>
}

export default Todostart