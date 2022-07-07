<template>
  <div class="vanilla2">
    <button v-on:click="doCall">Click to Start</button>
    <div class="field">
      <label class="label">Phone </label>
      <input size="20" name="myphone" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Favorite Color </label>
      <input size="20" name="color" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Favorite Animal </label>
      <input size="20" name="animal" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Use Case </label>
      <input size="40" name="usecase" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Can I give you a million dollars? </label>
      <input name="million" type="checkbox" />
    </div>
    <div class="field">
      <select
        id="dialingCode-6ea41355-be60-48c3-9c3d-065b9b9c716a"
        aria-label="Dialing Code"
        required=""
        name="cc"
        data-di-id="#dialingCode-6ea41355-be60-48c3-9c3d-065b9b9c716a"
      >
        <option selected="" disabled="" value="">Select CC</option>
        <option
          data-country-code="AF"
          data-country-name="Afghanistan"
          value="+93"
        >
          Afghanistan
        </option>
        <option
          data-country-code="AX"
          data-country-name="Aland Islands"
          value="+358-18"
        >
          Aland Islands
        </option>
        <option data-country-code="AL" data-country-name="Albania" value="+355">
          Albania
        </option>
        <option data-country-code="DZ" data-country-name="Algeria" value="+213">
          Algeria
        </option>
        <option
          data-country-code="AS"
          data-country-name="American Samoa"
          value="+1-684"
        >
          American Samoa
        </option>
        <option data-country-code="AD" data-country-name="Andorra" value="+376">
          Andorra
        </option>
        <option data-country-code="AO" data-country-name="Angola" value="+244">
          Angola
        </option>
        <option
          data-country-code="AI"
          data-country-name="Anguilla"
          value="+1-264"
        >
          Anguilla
        </option>
        <option
          data-country-code="AQ"
          data-country-name="Antarctica"
          value="+672"
        >
          Antarctica
        </option>
        <option
          data-country-code="AG"
          data-country-name="Antigua and Barbuda"
          value="+1-268"
        >
          Antigua and Barbuda
        </option>
        <option
          data-country-code="AR"
          data-country-name="Argentina"
          value="+54"
        >
          Argentina
        </option>
        <option data-country-code="AM" data-country-name="Armenia" value="+374">
          Armenia
        </option>
        <option data-country-code="AW" data-country-name="Aruba" value="+297">
          Aruba
        </option>
        <option
          data-country-code="AU"
          data-country-name="Australia"
          value="+61"
        >
          Australia
        </option>
        <option data-country-code="AT" data-country-name="Austria" value="+43">
          Austria
        </option>
        <option
          data-country-code="AZ"
          data-country-name="Azerbaijan"
          value="+994"
        >
          Azerbaijan
        </option>
        <option
          data-country-code="BS"
          data-country-name="Bahamas"
          value="+1-242"
        >
          Bahamas
        </option>
        <option data-country-code="BH" data-country-name="Bahrain" value="+973">
          Bahrain
        </option>
        <option
          data-country-code="BD"
          data-country-name="Bangladesh"
          value="+880"
        >
          Bangladesh
        </option>
        <option
          data-country-code="BB"
          data-country-name="Barbados"
          value="+1-246"
        >
          Barbados
        </option>
        <option data-country-code="BY" data-country-name="Belarus" value="+375">
          Belarus
        </option>
        <option data-country-code="BE" data-country-name="Belgium" value="+32">
          Belgium
        </option>
        <option data-country-code="BZ" data-country-name="Belize" value="+501">
          Belize
        </option>
        <option data-country-code="BJ" data-country-name="Benin" value="+229">
          Benin
        </option>
        <option
          data-country-code="BM"
          data-country-name="Bermuda"
          value="+1-441"
        >
          Bermuda
        </option>
        <option data-country-code="BT" data-country-name="Bhutan" value="+975">
          Bhutan
        </option>
        <option data-country-code="BO" data-country-name="Bolivia" value="+591">
          Bolivia
        </option>
        <option
          data-country-code="BQ"
          data-country-name="Bonaire, Saint Eustatius and Saba "
          value="+599"
        >
          Bonaire, Saint Eustatius and Saba
        </option>
        <option
          data-country-code="BA"
          data-country-name="Bosnia and Herzegovina"
          value="+387"
        >
          Bosnia and Herzegovina
        </option>
        <option
          data-country-code="BW"
          data-country-name="Botswana"
          value="+267"
        >
          Botswana
        </option>
        <option data-country-code="BR" data-country-name="Brazil" value="+55">
          Brazil
        </option>
        <option
          data-country-code="IO"
          data-country-name="British Indian Ocean Territory"
          value="+246"
        >
          British Indian Ocean Territory
        </option>
        <option
          data-country-code="VG"
          data-country-name="British Virgin Islands"
          value="+1-284"
        >
          British Virgin Islands
        </option>
        <option data-country-code="BN" data-country-name="Brunei" value="+673">
          Brunei
        </option>
        <option
          data-country-code="BG"
          data-country-name="Bulgaria"
          value="+359"
        >
          Bulgaria
        </option>
        <option
          data-country-code="BF"
          data-country-name="Burkina Faso"
          value="+226"
        >
          Burkina Faso
        </option>
        <option data-country-code="BI" data-country-name="Burundi" value="+257">
          Burundi
        </option>
        <option
          data-country-code="KH"
          data-country-name="Cambodia"
          value="+855"
        >
          Cambodia
        </option>
        <option
          data-country-code="CM"
          data-country-name="Cameroon"
          value="+237"
        >
          Cameroon
        </option>
        <option data-country-code="CA" data-country-name="Canada" value="+1">
          Canada
        </option>
        <option
          data-country-code="CV"
          data-country-name="Cape Verde"
          value="+238"
        >
          Cape Verde
        </option>
        <option
          data-country-code="KY"
          data-country-name="Cayman Islands"
          value="+1-345"
        >
          Cayman Islands
        </option>
        <option
          data-country-code="CF"
          data-country-name="Central African Republic"
          value="+236"
        >
          Central African Republic
        </option>
        <option data-country-code="TD" data-country-name="Chad" value="+235">
          Chad
        </option>
        <option data-country-code="CL" data-country-name="Chile" value="+56">
          Chile
        </option>
        <option data-country-code="CN" data-country-name="China" value="+86">
          China
        </option>
        <option
          data-country-code="CX"
          data-country-name="Christmas Island"
          value="+61"
        >
          Christmas Island
        </option>
        <option
          data-country-code="CC"
          data-country-name="Cocos Islands"
          value="+61"
        >
          Cocos Islands
        </option>
        <option data-country-code="CO" data-country-name="Colombia" value="+57">
          Colombia
        </option>
        <option data-country-code="KM" data-country-name="Comoros" value="+269">
          Comoros
        </option>
        <option
          data-country-code="CK"
          data-country-name="Cook Islands"
          value="+682"
        >
          Cook Islands
        </option>
        <option
          data-country-code="CR"
          data-country-name="Costa Rica"
          value="+506"
        >
          Costa Rica
        </option>
        <option data-country-code="HR" data-country-name="Croatia" value="+385">
          Croatia
        </option>
        <option data-country-code="CU" data-country-name="Cuba" value="+53">
          Cuba
        </option>
        <option data-country-code="CW" data-country-name="Curacao" value="+599">
          Curacao
        </option>
        <option data-country-code="CY" data-country-name="Cyprus" value="+357">
          Cyprus
        </option>
        <option
          data-country-code="CZ"
          data-country-name="Czech Republic"
          value="+420"
        >
          Czech Republic
        </option>
        <option
          data-country-code="CD"
          data-country-name="Democratic Republic of the Congo"
          value="+243"
        >
          Democratic Republic of the Congo
        </option>
        <option data-country-code="DK" data-country-name="Denmark" value="+45">
          Denmark
        </option>
        <option
          data-country-code="DJ"
          data-country-name="Djibouti"
          value="+253"
        >
          Djibouti
        </option>
        <option
          data-country-code="DM"
          data-country-name="Dominica"
          value="+1-767"
        >
          Dominica
        </option>
        <option
          data-country-code="DO"
          data-country-name="Dominican Republic"
          value="+1"
        >
          Dominican Republic
        </option>
        <option
          data-country-code="TL"
          data-country-name="East Timor"
          value="+670"
        >
          East Timor
        </option>
        <option data-country-code="EC" data-country-name="Ecuador" value="+593">
          Ecuador
        </option>
        <option data-country-code="EG" data-country-name="Egypt" value="+20">
          Egypt
        </option>
        <option
          data-country-code="SV"
          data-country-name="El Salvador"
          value="+503"
        >
          El Salvador
        </option>
        <option
          data-country-code="GQ"
          data-country-name="Equatorial Guinea"
          value="+240"
        >
          Equatorial Guinea
        </option>
        <option data-country-code="ER" data-country-name="Eritrea" value="+291">
          Eritrea
        </option>
        <option data-country-code="EE" data-country-name="Estonia" value="+372">
          Estonia
        </option>
        <option
          data-country-code="ET"
          data-country-name="Ethiopia"
          value="+251"
        >
          Ethiopia
        </option>
        <option
          data-country-code="FK"
          data-country-name="Falkland Islands"
          value="+500"
        >
          Falkland Islands
        </option>
        <option
          data-country-code="FO"
          data-country-name="Faroe Islands"
          value="+298"
        >
          Faroe Islands
        </option>
        <option data-country-code="FJ" data-country-name="Fiji" value="+679">
          Fiji
        </option>
        <option data-country-code="FI" data-country-name="Finland" value="+358">
          Finland
        </option>
        <option data-country-code="FR" data-country-name="France" value="+33">
          France
        </option>
        <option
          data-country-code="GF"
          data-country-name="French Guiana"
          value="+594"
        >
          French Guiana
        </option>
        <option
          data-country-code="PF"
          data-country-name="French Polynesia"
          value="+689"
        >
          French Polynesia
        </option>
        <option
          data-country-code="TF"
          data-country-name="French Southern Territories"
          value="+262"
        >
          French Southern Territories
        </option>
        <option data-country-code="GA" data-country-name="Gabon" value="+241">
          Gabon
        </option>
        <option data-country-code="GM" data-country-name="Gambia" value="+220">
          Gambia
        </option>
        <option data-country-code="GE" data-country-name="Georgia" value="+995">
          Georgia
        </option>
        <option data-country-code="DE" data-country-name="Germany" value="+49">
          Germany
        </option>
        <option data-country-code="GH" data-country-name="Ghana" value="+233">
          Ghana
        </option>
        <option
          data-country-code="GI"
          data-country-name="Gibraltar"
          value="+350"
        >
          Gibraltar
        </option>
        <option data-country-code="GR" data-country-name="Greece" value="+30">
          Greece
        </option>
        <option
          data-country-code="GL"
          data-country-name="Greenland"
          value="+299"
        >
          Greenland
        </option>
        <option
          data-country-code="GD"
          data-country-name="Grenada"
          value="+1-473"
        >
          Grenada
        </option>
        <option
          data-country-code="GP"
          data-country-name="Guadeloupe"
          value="+590"
        >
          Guadeloupe
        </option>
        <option data-country-code="GU" data-country-name="Guam" value="+1-671">
          Guam
        </option>
        <option
          data-country-code="GT"
          data-country-name="Guatemala"
          value="+502"
        >
          Guatemala
        </option>
        <option
          data-country-code="GG"
          data-country-name="Guernsey"
          value="+44-1481"
        >
          Guernsey
        </option>
        <option data-country-code="GN" data-country-name="Guinea" value="+224">
          Guinea
        </option>
        <option
          data-country-code="GW"
          data-country-name="Guinea-Bissau"
          value="+245"
        >
          Guinea-Bissau
        </option>
        <option data-country-code="GY" data-country-name="Guyana" value="+592">
          Guyana
        </option>
        <option data-country-code="HT" data-country-name="Haiti" value="+509">
          Haiti
        </option>
        <option
          data-country-code="HN"
          data-country-name="Honduras"
          value="+504"
        >
          Honduras
        </option>
        <option
          data-country-code="HK"
          data-country-name="Hong Kong"
          value="+852"
        >
          Hong Kong
        </option>
        <option data-country-code="HU" data-country-name="Hungary" value="+36">
          Hungary
        </option>
        <option data-country-code="IS" data-country-name="Iceland" value="+354">
          Iceland
        </option>
        <option data-country-code="IN" data-country-name="India" value="+91">
          India
        </option>
        <option
          data-country-code="ID"
          data-country-name="Indonesia"
          value="+62"
        >
          Indonesia
        </option>
        <option data-country-code="IE" data-country-name="Ireland" value="+353">
          Ireland
        </option>
        <option
          data-country-code="IM"
          data-country-name="Isle of Man"
          value="+44-1624"
        >
          Isle of Man
        </option>
        <option data-country-code="IL" data-country-name="Israel" value="+972">
          Israel
        </option>
        <option data-country-code="IT" data-country-name="Italy" value="+39">
          Italy
        </option>
        <option
          data-country-code="CI"
          data-country-name="Ivory Coast"
          value="+225"
        >
          Ivory Coast
        </option>
        <option
          data-country-code="JM"
          data-country-name="Jamaica"
          value="+1-876"
        >
          Jamaica
        </option>
        <option data-country-code="JP" data-country-name="Japan" value="+81">
          Japan
        </option>
        <option
          data-country-code="JE"
          data-country-name="Jersey"
          value="+44-1534"
        >
          Jersey
        </option>
        <option data-country-code="JO" data-country-name="Jordan" value="+962">
          Jordan
        </option>
        <option
          data-country-code="KZ"
          data-country-name="Kazakhstan"
          value="+7"
        >
          Kazakhstan
        </option>
        <option data-country-code="KE" data-country-name="Kenya" value="+254">
          Kenya
        </option>
        <option
          data-country-code="KI"
          data-country-name="Kiribati"
          value="+686"
        >
          Kiribati
        </option>
        <option data-country-code="XK" data-country-name="Kosovo" value="+383">
          Kosovo
        </option>
        <option data-country-code="KW" data-country-name="Kuwait" value="+965">
          Kuwait
        </option>
        <option
          data-country-code="KG"
          data-country-name="Kyrgyzstan"
          value="+996"
        >
          Kyrgyzstan
        </option>
        <option data-country-code="LA" data-country-name="Laos" value="+856">
          Laos
        </option>
        <option data-country-code="LV" data-country-name="Latvia" value="+371">
          Latvia
        </option>
        <option data-country-code="LB" data-country-name="Lebanon" value="+961">
          Lebanon
        </option>
        <option data-country-code="LS" data-country-name="Lesotho" value="+266">
          Lesotho
        </option>
        <option data-country-code="LR" data-country-name="Liberia" value="+231">
          Liberia
        </option>
        <option data-country-code="LY" data-country-name="Libya" value="+218">
          Libya
        </option>
        <option
          data-country-code="LI"
          data-country-name="Liechtenstein"
          value="+423"
        >
          Liechtenstein
        </option>
        <option
          data-country-code="LT"
          data-country-name="Lithuania"
          value="+370"
        >
          Lithuania
        </option>
        <option
          data-country-code="LU"
          data-country-name="Luxembourg"
          value="+352"
        >
          Luxembourg
        </option>
        <option data-country-code="MO" data-country-name="Macao" value="+853">
          Macao
        </option>
        <option
          data-country-code="MK"
          data-country-name="Macedonia"
          value="+389"
        >
          Macedonia
        </option>
        <option
          data-country-code="MG"
          data-country-name="Madagascar"
          value="+261"
        >
          Madagascar
        </option>
        <option data-country-code="MW" data-country-name="Malawi" value="+265">
          Malawi
        </option>
        <option data-country-code="MY" data-country-name="Malaysia" value="+60">
          Malaysia
        </option>
        <option
          data-country-code="MV"
          data-country-name="Maldives"
          value="+960"
        >
          Maldives
        </option>
        <option data-country-code="ML" data-country-name="Mali" value="+223">
          Mali
        </option>
        <option data-country-code="MT" data-country-name="Malta" value="+356">
          Malta
        </option>
        <option
          data-country-code="MH"
          data-country-name="Marshall Islands"
          value="+692"
        >
          Marshall Islands
        </option>
        <option
          data-country-code="MQ"
          data-country-name="Martinique"
          value="+596"
        >
          Martinique
        </option>
        <option
          data-country-code="MR"
          data-country-name="Mauritania"
          value="+222"
        >
          Mauritania
        </option>
        <option
          data-country-code="MU"
          data-country-name="Mauritius"
          value="+230"
        >
          Mauritius
        </option>
        <option data-country-code="YT" data-country-name="Mayotte" value="+262">
          Mayotte
        </option>
        <option data-country-code="MX" data-country-name="Mexico" value="+52">
          Mexico
        </option>
        <option
          data-country-code="FM"
          data-country-name="Micronesia"
          value="+691"
        >
          Micronesia
        </option>
        <option data-country-code="MD" data-country-name="Moldova" value="+373">
          Moldova
        </option>
        <option data-country-code="MC" data-country-name="Monaco" value="+377">
          Monaco
        </option>
        <option
          data-country-code="MN"
          data-country-name="Mongolia"
          value="+976"
        >
          Mongolia
        </option>
        <option
          data-country-code="ME"
          data-country-name="Montenegro"
          value="+382"
        >
          Montenegro
        </option>
        <option
          data-country-code="MS"
          data-country-name="Montserrat"
          value="+1-664"
        >
          Montserrat
        </option>
        <option data-country-code="MA" data-country-name="Morocco" value="+212">
          Morocco
        </option>
        <option
          data-country-code="MZ"
          data-country-name="Mozambique"
          value="+258"
        >
          Mozambique
        </option>
        <option data-country-code="MM" data-country-name="Myanmar" value="+95">
          Myanmar
        </option>
        <option data-country-code="NA" data-country-name="Namibia" value="+264">
          Namibia
        </option>
        <option data-country-code="NR" data-country-name="Nauru" value="+674">
          Nauru
        </option>
        <option data-country-code="NP" data-country-name="Nepal" value="+977">
          Nepal
        </option>
        <option
          data-country-code="NL"
          data-country-name="Netherlands"
          value="+31"
        >
          Netherlands
        </option>
        <option
          data-country-code="NC"
          data-country-name="New Caledonia"
          value="+687"
        >
          New Caledonia
        </option>
        <option
          data-country-code="NZ"
          data-country-name="New Zealand"
          value="+64"
        >
          New Zealand
        </option>
        <option
          data-country-code="NI"
          data-country-name="Nicaragua"
          value="+505"
        >
          Nicaragua
        </option>
        <option data-country-code="NE" data-country-name="Niger" value="+227">
          Niger
        </option>
        <option data-country-code="NG" data-country-name="Nigeria" value="+234">
          Nigeria
        </option>
        <option data-country-code="NU" data-country-name="Niue" value="+683">
          Niue
        </option>
        <option
          data-country-code="NF"
          data-country-name="Norfolk Island"
          value="+672"
        >
          Norfolk Island
        </option>
        <option
          data-country-code="MP"
          data-country-name="Northern Mariana Islands"
          value="+1-670"
        >
          Northern Mariana Islands
        </option>
        <option data-country-code="NO" data-country-name="Norway" value="+47">
          Norway
        </option>
        <option data-country-code="OM" data-country-name="Oman" value="+968">
          Oman
        </option>
        <option data-country-code="PK" data-country-name="Pakistan" value="+92">
          Pakistan
        </option>
        <option data-country-code="PW" data-country-name="Palau" value="+680">
          Palau
        </option>
        <option
          data-country-code="PS"
          data-country-name="Palestine, State Of"
          value="+970"
        >
          Palestine, State Of
        </option>
        <option data-country-code="PA" data-country-name="Panama" value="+507">
          Panama
        </option>
        <option
          data-country-code="PG"
          data-country-name="Papua New Guinea"
          value="+675"
        >
          Papua New Guinea
        </option>
        <option
          data-country-code="PY"
          data-country-name="Paraguay"
          value="+595"
        >
          Paraguay
        </option>
        <option data-country-code="PE" data-country-name="Peru" value="+51">
          Peru
        </option>
        <option
          data-country-code="PH"
          data-country-name="Philippines"
          value="+63"
        >
          Philippines
        </option>
        <option
          data-country-code="PN"
          data-country-name="Pitcairn"
          value="+870"
        >
          Pitcairn
        </option>
        <option data-country-code="PL" data-country-name="Poland" value="+48">
          Poland
        </option>
        <option
          data-country-code="PT"
          data-country-name="Portugal"
          value="+351"
        >
          Portugal
        </option>
        <option
          data-country-code="PR"
          data-country-name="Puerto Rico"
          value="+1"
        >
          Puerto Rico
        </option>
        <option data-country-code="QA" data-country-name="Qatar" value="+974">
          Qatar
        </option>
        <option
          data-country-code="CG"
          data-country-name="Republic of the Congo"
          value="+242"
        >
          Republic of the Congo
        </option>
        <option data-country-code="RE" data-country-name="Reunion" value="+262">
          Reunion
        </option>
        <option data-country-code="RO" data-country-name="Romania" value="+40">
          Romania
        </option>
        <option data-country-code="RU" data-country-name="Russia" value="+7">
          Russia
        </option>
        <option data-country-code="RW" data-country-name="Rwanda" value="+250">
          Rwanda
        </option>
        <option
          data-country-code="BL"
          data-country-name="Saint Barthelemy"
          value="+590"
        >
          Saint Barthelemy
        </option>
        <option
          data-country-code="SH"
          data-country-name="Saint Helena"
          value="+290"
        >
          Saint Helena
        </option>
        <option
          data-country-code="KN"
          data-country-name="Saint Kitts and Nevis"
          value="+1-869"
        >
          Saint Kitts and Nevis
        </option>
        <option
          data-country-code="LC"
          data-country-name="Saint Lucia"
          value="+1-758"
        >
          Saint Lucia
        </option>
        <option
          data-country-code="MF"
          data-country-name="Saint Martin"
          value="+590"
        >
          Saint Martin
        </option>
        <option
          data-country-code="PM"
          data-country-name="Saint Pierre and Miquelon"
          value="+508"
        >
          Saint Pierre and Miquelon
        </option>
        <option
          data-country-code="VC"
          data-country-name="Saint Vincent and the Grenadines"
          value="+1-784"
        >
          Saint Vincent and the Grenadines
        </option>
        <option data-country-code="WS" data-country-name="Samoa" value="+685">
          Samoa
        </option>
        <option
          data-country-code="SM"
          data-country-name="San Marino"
          value="+378"
        >
          San Marino
        </option>
        <option
          data-country-code="ST"
          data-country-name="Sao Tome and Principe"
          value="+239"
        >
          Sao Tome and Principe
        </option>
        <option
          data-country-code="SA"
          data-country-name="Saudi Arabia"
          value="+966"
        >
          Saudi Arabia
        </option>
        <option data-country-code="SN" data-country-name="Senegal" value="+221">
          Senegal
        </option>
        <option data-country-code="RS" data-country-name="Serbia" value="+381">
          Serbia
        </option>
        <option
          data-country-code="SC"
          data-country-name="Seychelles"
          value="+248"
        >
          Seychelles
        </option>
        <option
          data-country-code="SL"
          data-country-name="Sierra Leone"
          value="+232"
        >
          Sierra Leone
        </option>
        <option
          data-country-code="SG"
          data-country-name="Singapore"
          value="+65"
        >
          Singapore
        </option>
        <option
          data-country-code="SX"
          data-country-name="Sint Maarten"
          value="+599"
        >
          Sint Maarten
        </option>
        <option
          data-country-code="SK"
          data-country-name="Slovakia"
          value="+421"
        >
          Slovakia
        </option>
        <option
          data-country-code="SI"
          data-country-name="Slovenia"
          value="+386"
        >
          Slovenia
        </option>
        <option
          data-country-code="SB"
          data-country-name="Solomon Islands"
          value="+677"
        >
          Solomon Islands
        </option>
        <option data-country-code="SO" data-country-name="Somalia" value="+252">
          Somalia
        </option>
        <option
          data-country-code="ZA"
          data-country-name="South Africa"
          value="+27"
        >
          South Africa
        </option>
        <option
          data-country-code="KR"
          data-country-name="South Korea"
          value="+82"
        >
          South Korea
        </option>
        <option
          data-country-code="SS"
          data-country-name="South Sudan"
          value="+211"
        >
          South Sudan
        </option>
        <option data-country-code="ES" data-country-name="Spain" value="+34">
          Spain
        </option>
        <option
          data-country-code="LK"
          data-country-name="Sri Lanka"
          value="+94"
        >
          Sri Lanka
        </option>
        <option data-country-code="SD" data-country-name="Sudan" value="+249">
          Sudan
        </option>
        <option
          data-country-code="SR"
          data-country-name="Suriname"
          value="+597"
        >
          Suriname
        </option>
        <option
          data-country-code="SJ"
          data-country-name="Svalbard and Jan Mayen"
          value="+47"
        >
          Svalbard and Jan Mayen
        </option>
        <option
          data-country-code="SZ"
          data-country-name="Swaziland"
          value="+268"
        >
          Swaziland
        </option>
        <option data-country-code="SE" data-country-name="Sweden" value="+46">
          Sweden
        </option>
        <option
          data-country-code="CH"
          data-country-name="Switzerland"
          value="+41"
        >
          Switzerland
        </option>
        <option data-country-code="TW" data-country-name="Taiwan" value="+886">
          Taiwan
        </option>
        <option
          data-country-code="TJ"
          data-country-name="Tajikistan"
          value="+992"
        >
          Tajikistan
        </option>
        <option
          data-country-code="TZ"
          data-country-name="Tanzania"
          value="+255"
        >
          Tanzania
        </option>
        <option data-country-code="TH" data-country-name="Thailand" value="+66">
          Thailand
        </option>
        <option data-country-code="TG" data-country-name="Togo" value="+228">
          Togo
        </option>
        <option data-country-code="TK" data-country-name="Tokelau" value="+690">
          Tokelau
        </option>
        <option data-country-code="TO" data-country-name="Tonga" value="+676">
          Tonga
        </option>
        <option
          data-country-code="TT"
          data-country-name="Trinidad and Tobago"
          value="+1-868"
        >
          Trinidad and Tobago
        </option>
        <option data-country-code="TN" data-country-name="Tunisia" value="+216">
          Tunisia
        </option>
        <option data-country-code="TR" data-country-name="Turkey" value="+90">
          Turkey
        </option>
        <option
          data-country-code="TM"
          data-country-name="Turkmenistan"
          value="+993"
        >
          Turkmenistan
        </option>
        <option
          data-country-code="TC"
          data-country-name="Turks and Caicos Islands"
          value="+1-649"
        >
          Turks and Caicos Islands
        </option>
        <option data-country-code="TV" data-country-name="Tuvalu" value="+688">
          Tuvalu
        </option>
        <option
          data-country-code="VI"
          data-country-name="U.S. Virgin Islands"
          value="+1-340"
        >
          U.S. Virgin Islands
        </option>
        <option data-country-code="UG" data-country-name="Uganda" value="+256">
          Uganda
        </option>
        <option data-country-code="UA" data-country-name="Ukraine" value="+380">
          Ukraine
        </option>
        <option
          data-country-code="AE"
          data-country-name="United Arab Emirates"
          value="+971"
        >
          United Arab Emirates
        </option>
        <option
          data-country-code="GB"
          data-country-name="United Kingdom"
          value="+44"
        >
          United Kingdom
        </option>
        <option
          data-country-code="US"
          data-country-name="United States"
          value="+1"
        >
          +1
        </option>
        <option
          data-country-code="UM"
          data-country-name="United States Minor Outlying Islands"
          value="+1"
        >
          United States Minor Outlying Islands
        </option>
        <option data-country-code="UY" data-country-name="Uruguay" value="+598">
          Uruguay
        </option>
        <option
          data-country-code="UZ"
          data-country-name="Uzbekistan"
          value="+998"
        >
          Uzbekistan
        </option>
        <option data-country-code="VU" data-country-name="Vanuatu" value="+678">
          Vanuatu
        </option>
        <option data-country-code="VA" data-country-name="Vatican" value="+379">
          Vatican
        </option>
        <option
          data-country-code="VE"
          data-country-name="Venezuela"
          value="+58"
        >
          Venezuela
        </option>
        <option data-country-code="VN" data-country-name="Vietnam" value="+84">
          Vietnam
        </option>
        <option
          data-country-code="WF"
          data-country-name="Wallis and Futuna"
          value="+681"
        >
          Wallis and Futuna
        </option>
        <option
          data-country-code="EH"
          data-country-name="Western Sahara"
          value="+212"
        >
          Western Sahara
        </option>
        <option data-country-code="YE" data-country-name="Yemen" value="+967">
          Yemen
        </option>
        <option data-country-code="ZM" data-country-name="Zambia" value="+260">
          Zambia
        </option>
        <option
          data-country-code="ZW"
          data-country-name="Zimbabwe"
          value="+263"
        >
          Zimbabwe
        </option>
      </select>
    </div>
    <div class="field">
      <input size="20" name="local" class="input" type="text" />
    </div>
    <div>
      <select
        id="country-365cafbe-0da8-459c-af1c-37310b4b5a75"
        name="country2"
        class="Vlt-form__select"
        required=""
        data-di-id="#country-365cafbe-0da8-459c-af1c-37310b4b5a75"
      >
        <option selected="" disabled="" value="">Select Country</option>
        <option data-country-code="AF" value="Afghanistan">Afghanistan</option>
        <option data-country-code="AX" value="Aland Islands">
          Aland Islands
        </option>
        <option data-country-code="AL" value="Albania">Albania</option>
        <option data-country-code="DZ" value="Algeria">Algeria</option>
        <option data-country-code="AS" value="American Samoa">
          American Samoa
        </option>
        <option data-country-code="AD" value="Andorra">Andorra</option>
        <option data-country-code="AO" value="Angola">Angola</option>
        <option data-country-code="AI" value="Anguilla">Anguilla</option>
        <option data-country-code="AQ" value="Antarctica">Antarctica</option>
        <option data-country-code="AG" value="Antigua and Barbuda">
          Antigua and Barbuda
        </option>
        <option data-country-code="AR" value="Argentina">Argentina</option>
        <option data-country-code="AM" value="Armenia">Armenia</option>
        <option data-country-code="AW" value="Aruba">Aruba</option>
        <option data-country-code="AU" value="Australia">Australia</option>
        <option data-is-gdpr="true" data-country-code="AT" value="Austria">
          Austria
        </option>
        <option data-country-code="AZ" value="Azerbaijan">Azerbaijan</option>
        <option data-country-code="BS" value="Bahamas">Bahamas</option>
        <option data-country-code="BH" value="Bahrain">Bahrain</option>
        <option data-country-code="BD" value="Bangladesh">Bangladesh</option>
        <option data-country-code="BB" value="Barbados">Barbados</option>
        <option data-country-code="BY" value="Belarus">Belarus</option>
        <option data-is-gdpr="true" data-country-code="BE" value="Belgium">
          Belgium
        </option>
        <option data-country-code="BZ" value="Belize">Belize</option>
        <option data-country-code="BJ" value="Benin">Benin</option>
        <option data-country-code="BM" value="Bermuda">Bermuda</option>
        <option data-country-code="BT" value="Bhutan">Bhutan</option>
        <option data-country-code="BO" value="Bolivia">Bolivia</option>
        <option
          data-country-code="BQ"
          value="Bonaire, Saint Eustatius and Saba "
        >
          Bonaire, Saint Eustatius and Saba
        </option>
        <option data-country-code="BA" value="Bosnia and Herzegovina">
          Bosnia and Herzegovina
        </option>
        <option data-country-code="BW" value="Botswana">Botswana</option>
        <option data-country-code="BR" value="Brazil">Brazil</option>
        <option data-country-code="IO" value="British Indian Ocean Territory">
          British Indian Ocean Territory
        </option>
        <option data-country-code="VG" value="British Virgin Islands">
          British Virgin Islands
        </option>
        <option data-country-code="BN" value="Brunei">Brunei</option>
        <option data-is-gdpr="true" data-country-code="BG" value="Bulgaria">
          Bulgaria
        </option>
        <option data-country-code="BF" value="Burkina Faso">
          Burkina Faso
        </option>
        <option data-country-code="BI" value="Burundi">Burundi</option>
        <option data-country-code="KH" value="Cambodia">Cambodia</option>
        <option data-country-code="CM" value="Cameroon">Cameroon</option>
        <option data-country-code="CA" value="Canada">Canada</option>
        <option data-country-code="CV" value="Cape Verde">Cape Verde</option>
        <option data-country-code="KY" value="Cayman Islands">
          Cayman Islands
        </option>
        <option data-country-code="CF" value="Central African Republic">
          Central African Republic
        </option>
        <option data-country-code="TD" value="Chad">Chad</option>
        <option data-country-code="CL" value="Chile">Chile</option>
        <option data-country-code="CN" value="China">China</option>
        <option data-country-code="CX" value="Christmas Island">
          Christmas Island
        </option>
        <option data-country-code="CC" value="Cocos Islands">
          Cocos Islands
        </option>
        <option data-country-code="CO" value="Colombia">Colombia</option>
        <option data-country-code="KM" value="Comoros">Comoros</option>
        <option data-country-code="CK" value="Cook Islands">
          Cook Islands
        </option>
        <option data-country-code="CR" value="Costa Rica">Costa Rica</option>
        <option data-is-gdpr="true" data-country-code="HR" value="Croatia">
          Croatia
        </option>
        <option data-country-code="CU" value="Cuba">Cuba</option>
        <option data-country-code="CW" value="Curacao">Curacao</option>
        <option data-is-gdpr="true" data-country-code="CY" value="Cyprus">
          Cyprus
        </option>
        <option
          data-is-gdpr="true"
          data-country-code="CZ"
          value="Czech Republic"
        >
          Czech Republic
        </option>
        <option data-country-code="CD" value="Democratic Republic of the Congo">
          Democratic Republic of the Congo
        </option>
        <option data-is-gdpr="true" data-country-code="DK" value="Denmark">
          Denmark
        </option>
        <option data-country-code="DJ" value="Djibouti">Djibouti</option>
        <option data-country-code="DM" value="Dominica">Dominica</option>
        <option data-country-code="DO" value="Dominican Republic">
          Dominican Republic
        </option>
        <option data-country-code="TL" value="East Timor">East Timor</option>
        <option data-country-code="EC" value="Ecuador">Ecuador</option>
        <option data-country-code="EG" value="Egypt">Egypt</option>
        <option data-country-code="SV" value="El Salvador">El Salvador</option>
        <option data-country-code="GQ" value="Equatorial Guinea">
          Equatorial Guinea
        </option>
        <option data-country-code="ER" value="Eritrea">Eritrea</option>
        <option data-is-gdpr="true" data-country-code="EE" value="Estonia">
          Estonia
        </option>
        <option data-country-code="ET" value="Ethiopia">Ethiopia</option>
        <option data-country-code="FK" value="Falkland Islands">
          Falkland Islands
        </option>
        <option data-country-code="FO" value="Faroe Islands">
          Faroe Islands
        </option>
        <option data-country-code="FJ" value="Fiji">Fiji</option>
        <option data-is-gdpr="true" data-country-code="FI" value="Finland">
          Finland
        </option>
        <option data-is-gdpr="true" data-country-code="FR" value="France">
          France
        </option>
        <option data-country-code="GF" value="French Guiana">
          French Guiana
        </option>
        <option data-country-code="PF" value="French Polynesia">
          French Polynesia
        </option>
        <option data-country-code="TF" value="French Southern Territories">
          French Southern Territories
        </option>
        <option data-country-code="GA" value="Gabon">Gabon</option>
        <option data-country-code="GM" value="Gambia">Gambia</option>
        <option data-country-code="GE" value="Georgia">Georgia</option>
        <option data-is-gdpr="true" data-country-code="DE" value="Germany">
          Germany
        </option>
        <option data-country-code="GH" value="Ghana">Ghana</option>
        <option data-country-code="GI" value="Gibraltar">Gibraltar</option>
        <option data-is-gdpr="true" data-country-code="GR" value="Greece">
          Greece
        </option>
        <option data-country-code="GL" value="Greenland">Greenland</option>
        <option data-country-code="GD" value="Grenada">Grenada</option>
        <option data-country-code="GP" value="Guadeloupe">Guadeloupe</option>
        <option data-country-code="GU" value="Guam">Guam</option>
        <option data-country-code="GT" value="Guatemala">Guatemala</option>
        <option data-country-code="GG" value="Guernsey">Guernsey</option>
        <option data-country-code="GN" value="Guinea">Guinea</option>
        <option data-country-code="GW" value="Guinea-Bissau">
          Guinea-Bissau
        </option>
        <option data-country-code="GY" value="Guyana">Guyana</option>
        <option data-country-code="HT" value="Haiti">Haiti</option>
        <option data-country-code="HN" value="Honduras">Honduras</option>
        <option data-country-code="HK" value="Hong Kong">Hong Kong</option>
        <option data-is-gdpr="true" data-country-code="HU" value="Hungary">
          Hungary
        </option>
        <option data-country-code="IS" value="Iceland">Iceland</option>
        <option data-country-code="IN" value="India">India</option>
        <option data-country-code="ID" value="Indonesia">Indonesia</option>
        <option data-is-gdpr="true" data-country-code="IE" value="Ireland">
          Ireland
        </option>
        <option data-country-code="IM" value="Isle of Man">Isle of Man</option>
        <option data-country-code="IL" value="Israel">Israel</option>
        <option data-is-gdpr="true" data-country-code="IT" value="Italy">
          Italy
        </option>
        <option data-country-code="CI" value="Ivory Coast">Ivory Coast</option>
        <option data-country-code="JM" value="Jamaica">Jamaica</option>
        <option data-country-code="JP" value="Japan">Japan</option>
        <option data-country-code="JE" value="Jersey">Jersey</option>
        <option data-country-code="JO" value="Jordan">Jordan</option>
        <option data-country-code="KZ" value="Kazakhstan">Kazakhstan</option>
        <option data-country-code="KE" value="Kenya">Kenya</option>
        <option data-country-code="KI" value="Kiribati">Kiribati</option>
        <option data-country-code="XK" value="Kosovo">Kosovo</option>
        <option data-country-code="KW" value="Kuwait">Kuwait</option>
        <option data-country-code="KG" value="Kyrgyzstan">Kyrgyzstan</option>
        <option data-country-code="LA" value="Laos">Laos</option>
        <option data-is-gdpr="true" data-country-code="LV" value="Latvia">
          Latvia
        </option>
        <option data-country-code="LB" value="Lebanon">Lebanon</option>
        <option data-country-code="LS" value="Lesotho">Lesotho</option>
        <option data-country-code="LR" value="Liberia">Liberia</option>
        <option data-country-code="LY" value="Libya">Libya</option>
        <option data-country-code="LI" value="Liechtenstein">
          Liechtenstein
        </option>
        <option data-is-gdpr="true" data-country-code="LT" value="Lithuania">
          Lithuania
        </option>
        <option data-is-gdpr="true" data-country-code="LU" value="Luxembourg">
          Luxembourg
        </option>
        <option data-country-code="MO" value="Macao">Macao</option>
        <option data-country-code="MK" value="Macedonia">Macedonia</option>
        <option data-country-code="MG" value="Madagascar">Madagascar</option>
        <option data-country-code="MW" value="Malawi">Malawi</option>
        <option data-country-code="MY" value="Malaysia">Malaysia</option>

        <option data-country-code="MV" value="Maldives">Maldives</option>
        <option data-country-code="ML" value="Mali">Mali</option>
        <option data-is-gdpr="true" data-country-code="MT" value="Malta">
          Malta
        </option>
        <option data-country-code="MH" value="Marshall Islands">
          Marshall Islands
        </option>
        <option data-country-code="MQ" value="Martinique">Martinique</option>
        <option data-country-code="MR" value="Mauritania">Mauritania</option>
        <option data-country-code="MU" value="Mauritius">Mauritius</option>
        <option data-country-code="YT" value="Mayotte">Mayotte</option>
        <option data-country-code="MX" value="Mexico">Mexico</option>
        <option data-country-code="FM" value="Micronesia">Micronesia</option>
        <option data-country-code="MD" value="Moldova">Moldova</option>
        <option data-country-code="MC" value="Monaco">Monaco</option>
        <option data-country-code="MN" value="Mongolia">Mongolia</option>
        <option data-country-code="ME" value="Montenegro">Montenegro</option>
        <option data-country-code="MS" value="Montserrat">Montserrat</option>
        <option data-country-code="MA" value="Morocco">Morocco</option>
        <option data-country-code="MZ" value="Mozambique">Mozambique</option>
        <option data-country-code="MM" value="Myanmar">Myanmar</option>
        <option data-country-code="NA" value="Namibia">Namibia</option>
        <option data-country-code="NR" value="Nauru">Nauru</option>
        <option data-country-code="NP" value="Nepal">Nepal</option>
        <option data-is-gdpr="true" data-country-code="NL" value="Netherlands">
          Netherlands
        </option>
        <option data-country-code="NC" value="New Caledonia">
          New Caledonia
        </option>
        <option data-country-code="NZ" value="New Zealand">New Zealand</option>
        <option data-country-code="NI" value="Nicaragua">Nicaragua</option>
        <option data-country-code="NE" value="Niger">Niger</option>
        <option data-country-code="NG" value="Nigeria">Nigeria</option>
        <option data-country-code="NU" value="Niue">Niue</option>
        <option data-country-code="NF" value="Norfolk Island">
          Norfolk Island
        </option>
        <option data-country-code="MP" value="Northern Mariana Islands">
          Northern Mariana Islands
        </option>
        <option data-country-code="NO" value="Norway">Norway</option>
        <option data-country-code="OM" value="Oman">Oman</option>
        <option data-country-code="PK" value="Pakistan">Pakistan</option>
        <option data-country-code="PW" value="Palau">Palau</option>
        <option data-country-code="PS" value="Palestine, State Of">
          Palestine, State Of
        </option>
        <option data-country-code="PA" value="Panama">Panama</option>
        <option data-country-code="PG" value="Papua New Guinea">
          Papua New Guinea
        </option>
        <option data-country-code="PY" value="Paraguay">Paraguay</option>
        <option data-country-code="PE" value="Peru">Peru</option>
        <option data-country-code="PH" value="Philippines">Philippines</option>
        <option data-country-code="PN" value="Pitcairn">Pitcairn</option>
        <option data-is-gdpr="true" data-country-code="PL" value="Poland">
          Poland
        </option>
        <option data-is-gdpr="true" data-country-code="PT" value="Portugal">
          Portugal
        </option>
        <option data-country-code="PR" value="Puerto Rico">Puerto Rico</option>
        <option data-country-code="QA" value="Qatar">Qatar</option>
        <option data-country-code="CG" value="Republic of the Congo">
          Republic of the Congo
        </option>
        <option data-country-code="RE" value="Reunion">Reunion</option>
        <option data-is-gdpr="true" data-country-code="RO" value="Romania">
          Romania
        </option>
        <option data-country-code="RU" value="Russia">Russia</option>
        <option data-country-code="RW" value="Rwanda">Rwanda</option>
        <option data-country-code="BL" value="Saint Barthelemy">
          Saint Barthelemy
        </option>
        <option data-country-code="SH" value="Saint Helena">
          Saint Helena
        </option>
        <option data-country-code="KN" value="Saint Kitts and Nevis">
          Saint Kitts and Nevis
        </option>
        <option data-country-code="LC" value="Saint Lucia">Saint Lucia</option>
        <option data-country-code="MF" value="Saint Martin">
          Saint Martin
        </option>
        <option data-country-code="PM" value="Saint Pierre and Miquelon">
          Saint Pierre and Miquelon
        </option>
        <option data-country-code="VC" value="Saint Vincent and the Grenadines">
          Saint Vincent and the Grenadines
        </option>
        <option data-country-code="WS" value="Samoa">Samoa</option>
        <option data-country-code="SM" value="San Marino">San Marino</option>
        <option data-country-code="ST" value="Sao Tome and Principe">
          Sao Tome and Principe
        </option>
        <option data-country-code="SA" value="Saudi Arabia">
          Saudi Arabia
        </option>
        <option data-country-code="SN" value="Senegal">Senegal</option>
        <option data-country-code="RS" value="Serbia">Serbia</option>
        <option data-country-code="SC" value="Seychelles">Seychelles</option>
        <option data-country-code="SL" value="Sierra Leone">
          Sierra Leone
        </option>
        <option data-country-code="SG" value="Singapore">Singapore</option>
        <option data-country-code="SX" value="Sint Maarten">
          Sint Maarten
        </option>
        <option data-is-gdpr="true" data-country-code="SK" value="Slovakia">
          Slovakia
        </option>
        <option data-country-code="SI" value="Slovenia">Slovenia</option>
        <option data-country-code="SB" value="Solomon Islands">
          Solomon Islands
        </option>
        <option data-country-code="SO" value="Somalia">Somalia</option>
        <option data-country-code="ZA" value="South Africa">
          South Africa
        </option>
        <option data-country-code="KR" value="South Korea">South Korea</option>
        <option data-country-code="SS" value="South Sudan">South Sudan</option>
        <option data-is-gdpr="true" data-country-code="ES" value="Spain">
          Spain
        </option>
        <option data-country-code="LK" value="Sri Lanka">Sri Lanka</option>
        <option data-country-code="SD" value="Sudan">Sudan</option>
        <option data-country-code="SR" value="Suriname">Suriname</option>
        <option data-country-code="SJ" value="Svalbard and Jan Mayen">
          Svalbard and Jan Mayen
        </option>
        <option data-country-code="SZ" value="Swaziland">Swaziland</option>
        <option data-is-gdpr="true" data-country-code="SE" value="Sweden">
          Sweden
        </option>
        <option data-country-code="CH" value="Switzerland">Switzerland</option>
        <option data-country-code="TW" value="Taiwan">Taiwan</option>
        <option data-country-code="TJ" value="Tajikistan">Tajikistan</option>
        <option data-country-code="TZ" value="Tanzania">Tanzania</option>
        <option data-country-code="TH" value="Thailand">Thailand</option>
        <option data-country-code="TG" value="Togo">Togo</option>
        <option data-country-code="TK" value="Tokelau">Tokelau</option>
        <option data-country-code="TO" value="Tonga">Tonga</option>
        <option data-country-code="TT" value="Trinidad and Tobago">
          Trinidad and Tobago
        </option>
        <option data-country-code="TN" value="Tunisia">Tunisia</option>
        <option data-country-code="TR" value="Turkey">Turkey</option>
        <option data-country-code="TM" value="Turkmenistan">
          Turkmenistan
        </option>
        <option data-country-code="TC" value="Turks and Caicos Islands">
          Turks and Caicos Islands
        </option>
        <option data-country-code="TV" value="Tuvalu">Tuvalu</option>
        <option data-country-code="VI" value="U.S. Virgin Islands">
          U.S. Virgin Islands
        </option>
        <option data-country-code="UG" value="Uganda">Uganda</option>
        <option data-country-code="UA" value="Ukraine">Ukraine</option>
        <option data-country-code="AE" value="United Arab Emirates">
          United Arab Emirates
        </option>
        <option
          data-is-gdpr="true"
          data-country-code="GB"
          value="United Kingdom"
        >
          United Kingdom
        </option>
        <option data-country-code="US" value="United States">
          United States
        </option>
        <option
          data-country-code="UM"
          value="United States Minor Outlying Islands"
        >
          United States Minor Outlying Islands
        </option>
        <option data-country-code="UY" value="Uruguay">Uruguay</option>
        <option data-country-code="UZ" value="Uzbekistan">Uzbekistan</option>
        <option data-country-code="VU" value="Vanuatu">Vanuatu</option>
        <option data-country-code="VA" value="Vatican">Vatican</option>
        <option data-country-code="VE" value="Venezuela">Venezuela</option>
        <option data-country-code="VN" value="Vietnam">Vietnam</option>
        <option data-country-code="WF" value="Wallis and Futuna">
          Wallis and Futuna
        </option>
        <option data-country-code="EH" value="Western Sahara">
          Western Sahara
        </option>
        <option data-country-code="YE" value="Yemen">Yemen</option>
        <option data-country-code="ZM" value="Zambia">Zambia</option>
        <option data-country-code="ZW" value="Zimbabwe">Zimbabwe</option>
      </select>
    </div>
    <button name="done3" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import { v4v } from "@/assets/js/vapi4vonage";
export default {
  name: "vanilla2",
  props: {},
  data() {
    return {
      fields: [
        {
          name: "myphone",
          type: "phone",
          phrase: "Say your phone number, including the country code.",
          local: "local",
          countrycode: "cc",
          countrycodedata: "data-country-code",
          region: "country2",
          regiondata: "data-country-code",
        },
        {
          name: "color",
          type: "text",
          phrase: "What is your favorite color",
        },
        {
          name: "animal",
          type: "text",
          phrase: "Tell me what your very favorite animal is",
        },
        {
          name: "usecase",
          type: "text",
          phrase: "Briefly describe your use case",
        },
        {
          name: "million",
          type: "checkbox",
          phrase: "Would you like me to give you a million dollars?",
        },
        {
          name: "done3",
          type: "button",
          phrase: "Does that sound good?",
        },
      ],
    };
  },
  created() {
    console.log("Vanilla test");
  },
  mounted() {},
  methods: {
    doCall() {
      v4v.doForm(this.fields);
    },
    submit() {
      alert("Form submitted!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
