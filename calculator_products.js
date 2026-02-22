// Bodaq & Coverstyl Producten - ULTRA STRIKTE CATEGORISATIE
// Elke categorie heeft eigen prijsstelling

const BODAQ_PRODUCTS = [
  {
    "code": "APZ05",
    "name": "Bodaq interior film APZ05 metal gold crack op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6944_637526206495524561_Large.png"
  },
  {
    "code": "APZ14",
    "name": "Bodaq interior film APZ14 metal silver metal weave op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7338_637837082338193903_Large.png"
  },
  {
    "code": "APZ18",
    "name": "Bodaq interior film APZ18 metal gold metal weave op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7339_637837083970228911_Large.png"
  },
  {
    "code": "APZ25",
    "name": "Bodaq interior film APZ25 metal strong golden fabric op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6317_637526220396697433_Large.png"
  },
  {
    "code": "APZ26",
    "name": "Bodaq interior film APZ26 metal classic golden fabric op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6318_637526227549486551_Large.png"
  },
  {
    "code": "BZ910",
    "name": "Bodaq interior film BZ910 rich wood magister op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10093_638980136600261843_Large.png"
  },
  {
    "code": "CP202",
    "name": "Bodaq interior film CP202 white metallic gloss op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10094_638980138735456666_Large.png"
  },
  {
    "code": "DM017",
    "name": "Bodaq interior film DM017 texture brushed light silver op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6323_637526233580153485_Large.png"
  },
  {
    "code": "DM036",
    "name": "Bodaq interior film DM036 texture metallic fine silver op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7340_637837089502118347_Large.png"
  },
  {
    "code": "DM801",
    "name": "Bodaq interior film DM801 texture speckeld stone op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6324_637526236230533710_Large.png"
  },
  {
    "code": "DW710",
    "name": "Bodaq interior film DW710 design wood picta op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6325_637526237407038325_Large.png"
  },
  {
    "code": "DW724",
    "name": "Bodaq interior film DW724 design wood confectum duo op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7377_637837973390125469_Large.png"
  },
  {
    "code": "DW801",
    "name": "Bodaq interior film DW801 white vintage wood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8249_638220018453824740_Large.png"
  },
  {
    "code": "HD711",
    "name": "Bodaq interior film HD711 stone beige marble gloss op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6327_637526239624101652_Large.png"
  },
  {
    "code": "HS204",
    "name": "Bodaq interior film HS204 texture white gloss op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6328_637526240672002609_Large.png"
  },
  {
    "code": "HS205",
    "name": "Bodaq interior film HS205 texture black gloss op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6329_637526242497470024_Large.png"
  },
  {
    "code": "LM202",
    "name": "Bodaq interior film LM202 satin white wood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10095_638980141959357101_Large.png"
  },
  {
    "code": "LS102",
    "name": "Bodaq interior film LS102 texture white picta op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7382_637837981651241469_Large.png"
  },
  {
    "code": "LS103",
    "name": "Bodaq interior film LS103 texture black picta op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6331_637526244904384305_Large.png"
  },
  {
    "code": "LS104",
    "name": "Bodaq interior film LS104 texture shiny white grid op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7383_637837983154721020_Large.png"
  },
  {
    "code": "LS106",
    "name": "Bodaq interior film LS106 texture pure black wood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6332_637526246388110704_Large.png"
  },
  {
    "code": "LW107",
    "name": "Bodaq interior film LW107 long wood timber oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10107_639047711851698272_Large.png"
  },
  {
    "code": "LW110",
    "name": "Bodaq interior film LW110 long wood nordic oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10102_639038840507594137_Large.png"
  },
  {
    "code": "LW112",
    "name": "Bodaq interior film LW112 long wood nordic oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10103_639038842717205168_Large.png"
  },
  {
    "code": "LW115",
    "name": "Bodaq interior film LW115 long wood alpine oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10104_639038844764916774_Large.png"
  },
  {
    "code": "LW119",
    "name": "Bodaq interior film LW119 long wood ebony oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10105_639038846860661425_Large.png"
  },
  {
    "code": "LW120",
    "name": "Bodaq interior film LW120 long wood ebony oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10106_639038848755588477_Large.png"
  },
  {
    "code": "NS121",
    "name": "Bodaq interior film NS121 litus op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8250_638220020430877581_Large.png"
  },
  {
    "code": "NS401",
    "name": "Bodaq interior film NS401 stone bright concrete beton op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6333_637526249029741033_Large.png"
  },
  {
    "code": "NS402",
    "name": "Bodaq interior film NS402 stone middle concrete beton op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6334_637526253088835932_Large.png"
  },
  {
    "code": "NS403",
    "name": "Bodaq interior film NS403 stone dark concrete beton op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6335_637526254096734391_Large.png"
  },
  {
    "code": "NS410",
    "name": "Bodaq interior film NS410 stone red iron oxide op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6336_637526255517160048_Large.png"
  },
  {
    "code": "NS601",
    "name": "Bodaq interior film NS601 patina moon op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8251_638220022011206896_Large.png"
  },
  {
    "code": "NS602",
    "name": "Bodaq interior film NS602 patina earth op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8252_638220024229956324_Large.png"
  },
  {
    "code": "NS703",
    "name": "Bodaq interior film NS703 stone light cement op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6337_637526256516459523_Large.png"
  },
  {
    "code": "NS704",
    "name": "Bodaq interior film NS704 stone middle cement op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7346_637837278586059404_Large.png"
  },
  {
    "code": "NS705",
    "name": "Bodaq interior film NS705 stone dark cement op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6338_637526257386223098_Large.png"
  },
  {
    "code": "NS707",
    "name": "Bodaq interior film NS707 stone dark basalt op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7348_637837283126384907_Large.png"
  },
  {
    "code": "NS708",
    "name": "Bodaq interior film NS708 stone colored terrazo op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7349_637837286805989939_Large.png"
  },
  {
    "code": "NS710",
    "name": "Bodaq interior film NS710 velum dark op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8253_638873838315379771_Large.png"
  },
  {
    "code": "NS711",
    "name": "Bodaq interior film NS711 velum light op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8254_638873835441289815_Large.png"
  },
  {
    "code": "NS804",
    "name": "Bodaq interior film NS804 stone nero marquina op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6339_637526258285360599_Large.png"
  },
  {
    "code": "NS806",
    "name": "Bodaq interior film NS806 stone travertine op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7350_637837328278029550_Large.png"
  },
  {
    "code": "NS814",
    "name": "Bodaq interior film NS814 stone soft arabesque op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6340_637526259188405641_Large.png"
  },
  {
    "code": "NS815",
    "name": "Bodaq interior film NS815 stone intense arabesque op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10096_638980143756443156_Large.png"
  },
  {
    "code": "NS820",
    "name": "Bodaq interior film NS820 materia op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8255_638220028799662001_Large.png"
  },
  {
    "code": "NS895",
    "name": "Bodaq interior film NS895 stone blanco marquina op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6341_637526260062700856_Large.png"
  },
  {
    "code": "PM003",
    "name": "Bodaq interior film PM003 stone bright onyx op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7352_637837924736327506_Large.png"
  },
  {
    "code": "PM004",
    "name": "Bodaq interior film PM004 stone dark terrazzo op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7353_637837926189749141_Large.png"
  },
  {
    "code": "PM006",
    "name": "Bodaq interior film PM006 stone grey marble op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7354_637837927430883315_Large.png"
  },
  {
    "code": "PM007",
    "name": "Bodaq interior film PM007 stone black marble op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8256_638220030547803180_Large.png"
  },
  {
    "code": "PM008",
    "name": "Bodaq interior film PM008 stone light terrazzo op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7355_637837928735287011_Large.png"
  },
  {
    "code": "PM009",
    "name": "Bodaq interior film PM009 stone lapideo op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8257_638220032049071459_Large.png"
  },
  {
    "code": "PM011",
    "name": "Bodaq interior film PM011 stone terrazzo pastel op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8258_638220033804323720_Large.png"
  },
  {
    "code": "PM015",
    "name": "Bodaq interior film PM015 stone dark pretium op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8259_638220035170117289_Large.png"
  },
  {
    "code": "PM016",
    "name": "Bodaq interior film PM016 stone light pretium op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8260_638220036910757863_Large.png"
  },
  {
    "code": "PM018",
    "name": "Bodaq interior film PM018 stone vermes op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8261_638220038154831667_Large.png"
  },
  {
    "code": "PNC41",
    "name": "Bodaq interior film PNC41 aspero brown op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8262_638220040747511513_Large.png"
  },
  {
    "code": "PNC42",
    "name": "Bodaq interior film PNC42 aspero white op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8263_638220041987056215_Large.png"
  },
  {
    "code": "PNC43",
    "name": "Bodaq interior film PNC43 aspero beige op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8264_638220043346137780_Large.png"
  },
  {
    "code": "PNC44",
    "name": "Bodaq interior film PNC44 estructa light op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8265_638220044840065870_Large.png"
  },
  {
    "code": "PNC45",
    "name": "Bodaq interior film PNC45 estructa medium op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8266_638220046160721410_Large.png"
  },
  {
    "code": "PNC46",
    "name": "Bodaq interior film PNC46 estructa dark op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8267_638220047475578264_Large.png"
  },
  {
    "code": "PNC49",
    "name": "Bodaq interior film PNC49 fractura white op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8268_638220048782466023_Large.png"
  },
  {
    "code": "PNC50",
    "name": "Bodaq interior film PNC50 fractura grey op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8269_638220050984987848_Large.png"
  },
  {
    "code": "PNT01",
    "name": "Bodaq interior film PNT01 painted wood pictis white op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7384_637837988116946713_Large.png"
  },
  {
    "code": "PNT02",
    "name": "Bodaq interior film PNT02 painted wood pictis beige op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7385_637837989669189244_Large.png"
  },
  {
    "code": "PNT04",
    "name": "Bodaq interior film PNT04 painted wood pictis grey op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10097_638980145436700209_Large.png"
  },
  {
    "code": "PNT05",
    "name": "Bodaq interior film PNT05 painted wood pictis brown op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8270_638220052479231216_Large.png"
  },
  {
    "code": "PNT07",
    "name": "Bodaq interior film PNT07 painted wood pictis green op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8271_638220053626265739_Large.png"
  },
  {
    "code": "PNT08",
    "name": "Bodaq interior film PNT08 painted wood pictis dark grey op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8272_638220054739393116_Large.png"
  },
  {
    "code": "PNT09",
    "name": "Bodaq interior film PNT09 painted wood pictis blue op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8273_638220056093151483_Large.png"
  },
  {
    "code": "PNT10",
    "name": "Bodaq interior film PNT10 painted wood pictis dark brown op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8274_638220057368944769_Large.png"
  },
  {
    "code": "PTW04",
    "name": "Bodaq interior film PTW04 painted wood dark grey painted op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10098_638980147076824890_Large.png"
  },
  {
    "code": "PTW05",
    "name": "Bodaq interior film PTW05 painted wood middle blue painted op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6343_637526262908568549_Large.png"
  },
  {
    "code": "PTW06",
    "name": "Bodaq interior film PTW06 painted wood light blue painted op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7387_637837992406726467_Large.png"
  },
  {
    "code": "PTW07",
    "name": "Bodaq interior film PTW07 painted wood dark blue painted op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7388_637837993719701976_Large.png"
  },
  {
    "code": "PZ901",
    "name": "Bodaq interior film PZ901 rich wood ferox op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6350_637526273270694379_Large.png"
  },
  {
    "code": "PZ904",
    "name": "Bodaq interior film PZ904 rich wood solvit dark op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6351_637526305634061556_Large.png"
  },
  {
    "code": "RF007",
    "name": "Bodaq interior film RF007 texture tweed op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7356_637837931016746643_Large.png"
  },
  {
    "code": "RF008",
    "name": "Bodaq interior film RF008 texture tweed beige op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8280_638220135020441213_Large.png"
  },
  {
    "code": "RF009",
    "name": "Bodaq interior film RF009 texture filum op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8281_638220136534048463_Large.png"
  },
  {
    "code": "RF011",
    "name": "Bodaq interior film RF011 texture lido op 122 cm",
    "category": "Texture",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10099_638980406764295143_Large.png"
  },
  {
    "code": "RM002",
    "name": "Bodaq interior film RM002 real metal brushed dark silver op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6354_637526315050942560_Large.png"
  },
  {
    "code": "RM003",
    "name": "Bodaq interior film RM003 real metal brushed brass op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7342_637837202621776921_Large.png"
  },
  {
    "code": "RM004",
    "name": "Bodaq interior film RM004 real metal brushed middle silver op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6356_637526316387776049_Large.png"
  },
  {
    "code": "RM005",
    "name": "Bodaq interior film RM005 real metal heavy brushed silver op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6357_637526912164741533_Large.png"
  },
  {
    "code": "RM006",
    "name": "Bodaq interior film RM006 real metal heavy brushed grey op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6358_637526913078437335_Large.png"
  },
  {
    "code": "RM007",
    "name": "Bodaq interior film RM007 real metal brushed gold op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6359_637526915079891331_Large.png"
  },
  {
    "code": "RM008",
    "name": "Bodaq interior film RM008 real metal brushed copper op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6360_637526916345342997_Large.png"
  },
  {
    "code": "RM009",
    "name": "Bodaq interior film RM009 real metal heavy brushed anthracite op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6361_637526918377558793_Large.png"
  },
  {
    "code": "RM011",
    "name": "Bodaq interior film RM011 real metal silky cooper op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8283_638220139472355945_Large.png"
  },
  {
    "code": "RM012",
    "name": "Bodaq interior film RM012 real metal silky silver op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8284_638220140971744460_Large.png"
  },
  {
    "code": "RM013",
    "name": "Bodaq interior film RM013 real metal silky silver rose op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8285_638220142178786401_Large.png"
  },
  {
    "code": "RM022",
    "name": "Bodaq interior film RM022 real metal metallic fine grey op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7343_637837204281608088_Large.png"
  },
  {
    "code": "RM051",
    "name": "Bodaq interior film RM051 real metal hatched metal op 122 cm",
    "category": "Metal",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7344_637837206213035378_Large.png"
  },
  {
    "code": "S115",
    "name": "Bodaq interior film S115 solid pure white op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6362_637526923851614779_Large.png"
  },
  {
    "code": "S126",
    "name": "Bodaq interior film S126 solid eggshell op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6363_637526937079579725_Large.png"
  },
  {
    "code": "S127",
    "name": "Bodaq interior film S127 solid pumice op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6364_637526938251272055_Large.png"
  },
  {
    "code": "S128",
    "name": "Bodaq interior film S128 solid linen op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7309_637834563408940543_Large.png"
  },
  {
    "code": "S140",
    "name": "Bodaq interior film S140 solid pure black op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6365_637526939186201639_Large.png"
  },
  {
    "code": "S141",
    "name": "Bodaq interior film S141 solid chalk op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6366_637526940074564558_Large.png"
  },
  {
    "code": "S143",
    "name": "Bodaq interior film S143 solid elephant op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6367_637526946823570430_Large.png"
  },
  {
    "code": "S145",
    "name": "Bodaq interior film S145 solid root op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7310_637835550777159035_Large.png"
  },
  {
    "code": "S146",
    "name": "Bodaq interior film S146 solid sunflower op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6368_637526948478087045_Large.png"
  },
  {
    "code": "S147",
    "name": "Bodaq interior film S147 solid strawberry op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6369_637526949319409276_Large.png"
  },
  {
    "code": "S149",
    "name": "Bodaq interior film S149 solid anthracite op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6370_637526952514995235_Large.png"
  },
  {
    "code": "S150",
    "name": "Bodaq interior film S150 solid polar op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7311_637835563560080980_Large.png"
  },
  {
    "code": "S153",
    "name": "Bodaq interior film S153 solid balm cloud op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7312_637835564921329864_Large.png"
  },
  {
    "code": "S156",
    "name": "Bodaq interior film S156 solid sand op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6371_637527072903379029_Large.png"
  },
  {
    "code": "S157",
    "name": "Bodaq interior film S157 solid turtle op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8286_638220143558173706_Large.png"
  },
  {
    "code": "S158",
    "name": "Bodaq interior film S158 solid bone op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6372_638309024057553523_Large.png"
  },
  {
    "code": "S159",
    "name": "Bodaq interior film S159 solid mouse op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6373_637527087943501193_Large.png"
  },
  {
    "code": "S166",
    "name": "Bodaq interior film S166 solid lemon op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7313_637835585014567272_Large.png"
  },
  {
    "code": "S169",
    "name": "Bodaq interior film S169 solid orange op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6374_637527088815149814_Large.png"
  },
  {
    "code": "S173",
    "name": "Bodaq interior film S173 solid antartic op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7314_637835588086008516_Large.png"
  },
  {
    "code": "S175",
    "name": "Bodaq interior film S175 solid aqua op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7315_637835596268080083_Large.png"
  },
  {
    "code": "S176",
    "name": "Bodaq interior film S176 solid natural white op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6375_637527089782732254_Large.png"
  },
  {
    "code": "S177",
    "name": "Bodaq interior film S177 solid ivory op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6376_637527090941487457_Large.png"
  },
  {
    "code": "S178",
    "name": "Bodaq interior film S178 solid cream op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6377_637527091886586205_Large.png"
  },
  {
    "code": "S179",
    "name": "Bodaq interior film S179 solid cotton op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7316_637836401286636630_Large.png"
  },
  {
    "code": "S181",
    "name": "Bodaq interior film S181 solid grit op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6378_637527092958397263_Large.png"
  },
  {
    "code": "S183",
    "name": "Bodaq interior film S183 solid mud op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7317_637836402608954150_Large.png"
  },
  {
    "code": "S185",
    "name": "Bodaq interior film S185 solid balm heaven op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7318_637836403861733040_Large.png"
  },
  {
    "code": "S186",
    "name": "Bodaq interior film S186 solid glacier op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7319_637836405502986653_Large.png"
  },
  {
    "code": "S188",
    "name": "Bodaq interior film S188 solid sun op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7320_637836406735768554_Large.png"
  },
  {
    "code": "S189",
    "name": "Bodaq interior film S189 solid apple op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7321_637836408178562177_Large.png"
  },
  {
    "code": "S194",
    "name": "Bodaq interior film S194 solid beach op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7322_637836409431494993_Large.png"
  },
  {
    "code": "S195",
    "name": "Bodaq interior film S195 solid balm sage op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7323_637836410647239256_Large.png"
  },
  {
    "code": "S197",
    "name": "Bodaq interior film S197 solid deep sea op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6379_637527093805032854_Large.png"
  },
  {
    "code": "S198",
    "name": "Bodaq interior film S198 solid balm lavender op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6380_637527094936551739_Large.png"
  },
  {
    "code": "S200",
    "name": "Bodaq interior film S200 solid alga op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7324_637836412104837957_Large.png"
  },
  {
    "code": "S201",
    "name": "Bodaq interior film S201 solid pond op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7325_637836413437463437_Large.png"
  },
  {
    "code": "S202",
    "name": "Bodaq interior film S202 solid moss op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7326_637836418063620954_Large.png"
  },
  {
    "code": "S204",
    "name": "Bodaq interior film S204 solid inuit op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7327_637836419473796371_Large.png"
  },
  {
    "code": "S207",
    "name": "Bodaq interior film S207 solid balm rosé op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7329_637836457237583958_Large.png"
  },
  {
    "code": "S208",
    "name": "Bodaq interior film S208 solid sheep op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6381_637527096068517350_Large.png"
  },
  {
    "code": "S209",
    "name": "Bodaq interior film S209 solid stone op 122 cm",
    "category": "Stone",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6382_637527168710992516_Large.png"
  },
  {
    "code": "S210",
    "name": "Bodaq interior film S210 solid scratch card op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6383_637527288874229201_Large.png"
  },
  {
    "code": "S211",
    "name": "Bodaq interior film S211 solid washed black op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6384_637527289773677547_Large.png"
  },
  {
    "code": "S212",
    "name": "Bodaq interior film S212 solid basswood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7330_637836458514273383_Large.png"
  },
  {
    "code": "S213",
    "name": "Bodaq interior film S213 solid salmon op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8287_638220144994889145_Large.png"
  },
  {
    "code": "S214",
    "name": "Bodaq interior film S214 solid mint op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8288_638220146416083358_Large.png"
  },
  {
    "code": "S215",
    "name": "Bodaq interior film S215 solid lion op 122 cm TIJDELIJK NIET LEVERBAAR",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8289_638220148612139189_Large.png"
  },
  {
    "code": "S217",
    "name": "Bodaq interior film S217 solid piggy op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8290_638220155142926114_Large.png"
  },
  {
    "code": "S218",
    "name": "Bodaq interior film S218 solid cherry op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7331_637836459720175679_Large.png"
  },
  {
    "code": "S230",
    "name": "Bodaq interior film S230 solid balm salbei op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7332_637836461033429628_Large.png"
  },
  {
    "code": "S231",
    "name": "Bodaq interior film S231 solid dirty grey op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8291_638220156702863995_Large.png"
  },
  {
    "code": "S232",
    "name": "Bodaq interior film S232 solid hibiscus op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8292_638220158283078481_Large.png"
  },
  {
    "code": "S233",
    "name": "Bodaq interior film S233 solid ivy op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7333_637836462262770478_Large.png"
  },
  {
    "code": "S235",
    "name": "Bodaq interior film S235 solid hippo op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8293_638220159552484731_Large.png"
  },
  {
    "code": "S238",
    "name": "Bodaq interior film S238 solid rosé op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8294_638220160906884599_Large.png"
  },
  {
    "code": "S239",
    "name": "Bodaq interior film S239 solid eucalyptus op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8295_638220162471439411_Large.png"
  },
  {
    "code": "S241",
    "name": "Bodaq interior film S241 solid balm yellow op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8296_638220163885690607_Large.png"
  },
  {
    "code": "S242",
    "name": "Bodaq interior film S242 solid petrol blue op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8297_638220165357128957_Large.png"
  },
  {
    "code": "S243",
    "name": "Bodaq interior film S243 solid bride op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8298_638220166918550249_Large.png"
  },
  {
    "code": "S257",
    "name": "Bodaq interior film S257 solid gentle creme op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10101_638988803142896608_Large.png"
  },
  {
    "code": "SMT01",
    "name": "Bodaq interior film SMT01 solid silky matt white op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6385_637527290924571755_Large.png"
  },
  {
    "code": "SMT03",
    "name": "Bodaq interior film SMT03 solid silky matt light beige op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8299_638220168250125556_Large.png"
  },
  {
    "code": "SMT04",
    "name": "Bodaq interior film SMT04 solid silky matt dark beige op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8300_638220169684045721_Large.png"
  },
  {
    "code": "SMT05",
    "name": "Bodaq interior film SMT05 solid silky matt grey op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7336_637837078093888351_Large.png"
  },
  {
    "code": "SMT06",
    "name": "Bodaq interior film SMT06 solid silky matt anthracite op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6386_637527292244840697_Large.png"
  },
  {
    "code": "SMT07",
    "name": "Bodaq interior film SMT07 solid silky matt black op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6387_637527293190858922_Large.png"
  },
  {
    "code": "SMT10",
    "name": "Bodaq interior film SMT10 solid silky matt green op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8301_638220171106246869_Large.png"
  },
  {
    "code": "SMT11",
    "name": "Bodaq interior film SMT11 solid silky matt blue op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8302_638220172294695781_Large.png"
  },
  {
    "code": "SMT13",
    "name": "Bodaq interior film SMT13 solid silky matt light grey op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8303_638220173475488416_Large.png"
  },
  {
    "code": "SMT14",
    "name": "Bodaq interior film SMT14 solid silky matt light brown op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8304_638220174782844671_Large.png"
  },
  {
    "code": "SMT15",
    "name": "Bodaq interior film SMT15 solid silky matt dark brown op 122 cm",
    "category": "Solid",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8305_638220176110356106_Large.png"
  },
  {
    "code": "SPW12",
    "name": "Bodaq interior film SPW12 gravis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8306_638220178969581021_Large.png"
  },
  {
    "code": "SPW13",
    "name": "Bodaq interior film SPW13 omnis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8307_638220180138802313_Large.png"
  },
  {
    "code": "SPW15",
    "name": "Bodaq interior film SPW15 domus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8308_638220181549431078_Large.png"
  },
  {
    "code": "SPW16",
    "name": "Bodaq interior film SPW16 pavus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8309_638220182930848944_Large.png"
  },
  {
    "code": "SPW17",
    "name": "Bodaq interior film SPW17 calidum op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8310_638220184457424420_Large.png"
  },
  {
    "code": "SPW18",
    "name": "Bodaq interior film SPW18 legatus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8311_638220185967133175_Large.png"
  },
  {
    "code": "SPW92",
    "name": "Bodaq interior film SPW92 calum op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8312_638220187461990300_Large.png"
  },
  {
    "code": "SPW93",
    "name": "Bodaq interior film SPW93 solus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8313_638220189280912527_Large.png"
  },
  {
    "code": "SPW94",
    "name": "Bodaq interior film SPW94 arsis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8314_638220190796551010_Large.png"
  },
  {
    "code": "SPW95",
    "name": "Bodaq interior film SPW95 credo op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8315_638220192202344581_Large.png"
  },
  {
    "code": "SPW96",
    "name": "Bodaq interior film SPW96 autemo op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8316_638220193933141131_Large.png"
  },
  {
    "code": "TNS03",
    "name": "Bodaq interior film TNS03 leather grey grained leather op 122 cm",
    "category": "Textile",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7405_637838042596121572_Large.png"
  },
  {
    "code": "TNS04",
    "name": "Bodaq interior film TNS04 leather camel grained leather op 122 cm",
    "category": "Textile",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7406_637838044430178694_Large.png"
  },
  {
    "code": "TNS05",
    "name": "Bodaq interior film TNS05 leather beige grained leather op 122 cm",
    "category": "Textile",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7407_637838045820799463_Large.png"
  },
  {
    "code": "TNS10",
    "name": "Bodaq interior film TNS10 leather rhombus leather white op 122 cm",
    "category": "Textile",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7409_637838048959743834_Large.png"
  },
  {
    "code": "W141",
    "name": "Bodaq interior film W141 standard wood atrox op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6388_637527294202195106_Large.png"
  },
  {
    "code": "W171",
    "name": "Bodaq interior film W171 standard wood formica op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6389_637527295594815212_Large.png"
  },
  {
    "code": "W195",
    "name": "Bodaq interior film W195 standard wood avena op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7357_637837936333201020_Large.png"
  },
  {
    "code": "W198",
    "name": "Bodaq interior film W198 standard wood clavus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7358_637837937812573907_Large.png"
  },
  {
    "code": "W199",
    "name": "Bodaq interior film W199 standard wood golden beige op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6390_637527296736948643_Large.png"
  },
  {
    "code": "W200",
    "name": "Bodaq interior film W200 standard wood golden sand op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7359_637837939141462486_Large.png"
  },
  {
    "code": "W205",
    "name": "Bodaq interior film W205 standard wood oculus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7360_637837941990043586_Large.png"
  },
  {
    "code": "W207",
    "name": "Bodaq interior film W207 standard wood chestnut op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6391_637527297545449303_Large.png"
  },
  {
    "code": "W251",
    "name": "Bodaq interior film W251 standard wood arium op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7361_637837943257373842_Large.png"
  },
  {
    "code": "W274",
    "name": "Bodaq interior film W274 standard wood bright antique op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6392_637527298534752357_Large.png"
  },
  {
    "code": "W276",
    "name": "Bodaq interior film W276 standard wood ignis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7362_637837944495152405_Large.png"
  },
  {
    "code": "W302",
    "name": "Bodaq interior film W302 standard wood caprea op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7363_637837945683238093_Large.png"
  },
  {
    "code": "W371",
    "name": "Bodaq interior film W371 standard wood lumen op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7365_637837950888218310_Large.png"
  },
  {
    "code": "W375",
    "name": "Bodaq interior film W375 standard wood powdery op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7366_637837952028018920_Large.png"
  },
  {
    "code": "W376",
    "name": "Bodaq interior film W376 standard wood bokido op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7367_637837953527966695_Large.png"
  },
  {
    "code": "W389",
    "name": "Bodaq interior film W389 standard wood ash op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10091_638972529564479211_Large.png"
  },
  {
    "code": "W401",
    "name": "Bodaq interior film W401 standard wood lepus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8317_638220195586437085_Large.png"
  },
  {
    "code": "W504",
    "name": "Bodaq interior film W504 standard wood canis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8318_638220197038185758_Large.png"
  },
  {
    "code": "W508",
    "name": "Bodaq interior film W508 standard wood red noce op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7368_637837956821480327_Large.png"
  },
  {
    "code": "W636",
    "name": "Bodaq interior film W636 standard wood sangolis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8319_638220198369291810_Large.png"
  },
  {
    "code": "W638",
    "name": "Bodaq interior film W638 standard wood saltu op 122 cm OP=OP",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6394_637527303550316606_Large.png"
  },
  {
    "code": "W671",
    "name": "Bodaq interior film W671 standard wood ventum op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7369_637837961563974736_Large.png"
  },
  {
    "code": "W705",
    "name": "Bodaq interior film W705 standard wood noctis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6395_637527307015594133_Large.png"
  },
  {
    "code": "W722",
    "name": "Bodaq interior film W722 standard wood navis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6396_637527310868882379_Large.png"
  },
  {
    "code": "W731",
    "name": "Bodaq interior film W731 standard wood terra op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6397_637527718319667693_Large.png"
  },
  {
    "code": "W816",
    "name": "Bodaq interior film W816 standard wood dignus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8320_638220199866493213_Large.png"
  },
  {
    "code": "W823",
    "name": "Bodaq interior film W823 standard wood ibis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6398_637527719498503143_Large.png"
  },
  {
    "code": "W845",
    "name": "Bodaq interior film W845 standard wood cithara op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7370_637837963892058019_Large.png"
  },
  {
    "code": "W849",
    "name": "Bodaq interior film W849 standard wood aurum op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7371_637837965693574399_Large.png"
  },
  {
    "code": "W863",
    "name": "Bodaq interior film W863 standard wood nova caeli op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6399_637527720465135667_Large.png"
  },
  {
    "code": "W864",
    "name": "Bodaq interior film W864 standard wood agmentos op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8321_638220202424016904_Large.png"
  },
  {
    "code": "W865",
    "name": "Bodaq interior film W865 standard wood impetus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8322_638220203690122404_Large.png"
  },
  {
    "code": "W870",
    "name": "Bodaq interior film W870 standard wood natos op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8323_638220205060916347_Large.png"
  },
  {
    "code": "W871",
    "name": "Bodaq interior film W871 standard wood griseo op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7372_637837966920135081_Large.png"
  },
  {
    "code": "W874",
    "name": "Bodaq interior film W874 standard wood resina op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6400_637527721308478384_Large.png"
  },
  {
    "code": "W879",
    "name": "Bodaq interior film W879 standard wood resum op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10053_638887710113006116_Large.png"
  },
  {
    "code": "W923",
    "name": "Bodaq interior film W923 standard wood latos op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8324_638220206688588252_Large.png"
  },
  {
    "code": "W925",
    "name": "Bodaq interior film W925 standard wood trucus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8325_638220208318288669_Large.png"
  },
  {
    "code": "W931",
    "name": "Bodaq interior film W931 standard wood hazel op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7373_637837968050354936_Large.png"
  },
  {
    "code": "W932",
    "name": "Bodaq interior film W932 standard wood lupus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7374_637837969110910335_Large.png"
  },
  {
    "code": "W935",
    "name": "Bodaq interior film W935 standard wood daylight op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7375_637837970243781549_Large.png"
  },
  {
    "code": "W938",
    "name": "Bodaq interior film W938 standard wood blondie op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7376_637837971423794216_Large.png"
  },
  {
    "code": "W944",
    "name": "Bodaq interior film W944 standard wood milkshake op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6401_637527722334964688_Large.png"
  },
  {
    "code": "W945",
    "name": "Bodaq interior film W945 standard wood agri op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6402_637527723196595893_Large.png"
  },
  {
    "code": "W949",
    "name": "Bodaq interior film W949 standard wood honey op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6404_637527724832820192_Large.png"
  },
  {
    "code": "ZSW01",
    "name": "Bodaq interior film ZSW01 painted wood pure white calvum op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8326_638220210016585350_Large.png"
  },
  {
    "code": "ZSW04",
    "name": "Bodaq interior film ZSW04 painted wood pure white wood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6411_637527732964552663_Large.png"
  },
  {
    "code": "ZX107",
    "name": "Bodaq interior film ZX107 (voorheen BZ884) reed op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8218_638180193557627855_Large.png"
  },
  {
    "code": "ZX111",
    "name": "Bodaq interior film ZX111 (voorheen BZ907) rich wood alba medi op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6319_637526228250797993_Large.png"
  },
  {
    "code": "ZX112",
    "name": "Bodaq interior film ZX112 (voorheen BZ912) rich wood alba clara op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6320_637526230236433831_Large.png"
  },
  {
    "code": "ZX117",
    "name": "Bodaq interior film ZX117 (voorheen HZ003) rich wood grano op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7379_637837977428890828_Large.png"
  },
  {
    "code": "ZX118",
    "name": "Bodaq interior film ZX118 (voorheen HZ004) rich wood striped cello op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7380_637837978734298675_Large.png"
  },
  {
    "code": "ZX119",
    "name": "Bodaq interior film ZX119 (voorheen HZ005) rich wood fructus op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7381_637837979916039569_Large.png"
  },
  {
    "code": "ZX120",
    "name": "Bodaq interior film ZX120 (voorheen HZ006) rich wood ornate op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6330_637526243477703524_Large.png"
  },
  {
    "code": "ZX123",
    "name": "Bodaq interior film ZX123 (voorheen PZ008) rich wood lignea op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6344_637526264339473181_Large.png"
  },
  {
    "code": "ZX125",
    "name": "Bodaq interior film ZX125 (voorheen PZ010) rich wood arbor op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6345_637526265692864654_Large.png"
  },
  {
    "code": "ZX126",
    "name": "Bodaq interior film ZX126 (voorheen PZ013) rich wood glandis op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6346_637526266636538755_Large.png"
  },
  {
    "code": "ZX128",
    "name": "Bodaq interior film ZX128 (voorheen PZ020) rich wood gazebo op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9471_638522269002628291_Large.png"
  },
  {
    "code": "ZX129",
    "name": "Bodaq interior film ZX129 (voorheen PZ022) rich wood pavo dark op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6348_637526270457645776_Large.png"
  },
  {
    "code": "ZX131",
    "name": "Bodaq interior film ZX131 (voorheen PZ610) rich wood radiant sahara op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7389_637837996206312598_Large.png"
  },
  {
    "code": "ZX132",
    "name": "Bodaq interior film ZX132 (voorheen PZ611) rich wood radiant rabbit op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7390_637837997519132673_Large.png"
  },
  {
    "code": "ZX133",
    "name": "Bodaq interior film ZX133 (voorheen PZ612) rich wood radiant earth op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10092_638978587412363538_Large.png"
  },
  {
    "code": "ZX134",
    "name": "Bodaq interior film ZX134 (voorheen PZ613) rich wood radiant night op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7392_637838002486198897_Large.png"
  },
  {
    "code": "ZX135",
    "name": "Bodaq interior film ZX135 (voorheen PZ616) rich wood cinnamo op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7395_637838007913200966_Large.png"
  },
  {
    "code": "ZX136",
    "name": "Bodaq interior film ZX136 (voorheen PZ806) rich wood paleas op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6349_637526271432572319_Large.png"
  },
  {
    "code": "ZX137",
    "name": "Bodaq interior film ZX137 (voorheen PZ906) rich wood solvit light op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8503_638320853908964365_Large.png"
  },
  {
    "code": "ZX138",
    "name": "Bodaq interior film ZX138 (voorheen PZ912) rich wood umbra op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6353_637526311934421864_Large.png"
  },
  {
    "code": "ZX144",
    "name": "Bodaq interior film ZX144 (voorheen XP104) premium wood avia clara op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6406_637527728259704252_Large.png"
  },
  {
    "code": "ZX145",
    "name": "Bodaq interior film ZX145 (voorheen XP105) premium wood avia medi op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6407_637527729084326013_Large.png"
  },
  {
    "code": "ZX146",
    "name": "Bodaq interior film ZX146 (voorheen XP113) premium wood bright multi wood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7398_637838017279243527_Large.png"
  },
  {
    "code": "ZX147",
    "name": "Bodaq interior film ZX147 (voorheen XP114) premium wood dark multi wood op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7399_637838018715900043_Large.png"
  },
  {
    "code": "ZX148",
    "name": "Bodaq interior film ZX148 (voorheen XP115) premium wood popcorn op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6408_637527729967697969_Large.png"
  },
  {
    "code": "ZX149",
    "name": "Bodaq interior film ZX149 (voorheen XP118) premium wood frosted beige op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6409_637527730795278644_Large.png"
  },
  {
    "code": "ZX150",
    "name": "Bodaq interior film ZX150 (voorheen XP121) premium wood aestas op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7400_637838027460776372_Large.png"
  },
  {
    "code": "ZX157",
    "name": "Bodaq interior film ZX157 (voorheen Z836S) rich wood vikings op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_6410_637527731886159844_Large.png"
  },
  {
    "code": "ZX158",
    "name": "Bodaq interior film ZX158 (voorheen Z842S) rich wood old bench op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7401_637838034862937004_Large.png"
  },
  {
    "code": "ZX160",
    "name": "Bodaq interior film ZX160 (voorheen Z848S) rich wood golden bar op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7402_637838036285832655_Large.png"
  },
  {
    "code": "ZX161",
    "name": "Bodaq interior film ZX161 (voorheen Z850S) rich wood oak op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_10100_638980416904759976_Large.png"
  },
  {
    "code": "ZX165",
    "name": "Bodaq interior film ZX165 (voorheen Z858S) rich wood oatmeal op 122 cm",
    "category": "Wood",
    "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_7403_637838038066279465_Large.png"
  }
];

const COVERSTYL_PRODUCTS = [{"code": "AA14", "name": "CoverStyl interior film AA14 original oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8718_638391110999890013_Large.png"}, {"code": "AA15", "name": "CoverStyl interior film AA15 grey line oak structured op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8719_638391745509250051_Large.png"}, {"code": "AB05", "name": "CoverStyl interior film AB05 blue ebony op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8720_638391751780368506_Large.png"}, {"code": "AF03", "name": "CoverStyl interior film AF03 line beige pine op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8721_638391755981947761_Large.png"}, {"code": "AF08", "name": "CoverStyl interior film AF08 light grey oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8722_638391758128049853_Large.png"}, {"code": "AF10", "name": "CoverStyl interior film AF10 dark brown pine structured op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8723_638391760262745744_Large.png"}, {"code": "AG14", "name": "CoverStyl interior film AG14 cream golden oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8724_638391762882912419_Large.png"}, {"code": "AG20", "name": "CoverStyl interior film AG20 light cream beech op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8725_638391764943077141_Large.png"}, {"code": "AL09", "name": "CoverStyl interior film AL09 gold sanding styl op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8726_638391770705288985_Large.png"}, {"code": "AL11", "name": "CoverStyl interior film AL11 silver metal weeding op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8727_638391774187647054_Large.png"}, {"code": "AL14", "name": "CoverStyl interior film AL14 traditional oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8730_638391780695011799_Large.png"}, {"code": "AL15", "name": "CoverStyl interior film AL15 dark gold fabric op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8731_638391783206427739_Large.png"}, {"code": "AL24", "name": "CoverStyl interior film AL24 basic beige bao op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8733_638391789736767141_Large.png"}, {"code": "AL29", "name": "CoverStyl interior film AL29 white structured line bao op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8734_638391791886619501_Large.png"}, {"code": "AT04", "name": "CoverStyl interior film AT04 dark orangey cherry op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8735_638391794272878735_Large.png"}, {"code": "AU01", "name": "CoverStyl interior film AU01 aurora op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8736_638391797476800119_Large.png"}, {"code": "AU02", "name": "CoverStyl interior film AU02 aurora stripes op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8737_638391800747751596_Large.png"}, {"code": "AZ07", "name": "CoverStyl interior film AZ07 light golden oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8738_638391802866197850_Large.png"}, {"code": "B1", "name": "CoverStyl interior film B1 light wenge op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8739_638391805186363610_Large.png"}, {"code": "B3", "name": "CoverStyl interior film B3 light beech op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8740_638391858385011900_Large.png"}, {"code": "B4", "name": "CoverStyl interior film B4 pio light oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8741_638391860730958552_Large.png"}, {"code": "B5", "name": "CoverStyl interior film B5 medium beech op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8742_638392553357131140_Large.png"}, {"code": "B6", "name": "CoverStyl interior film B6 brio light aragon op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8743_638392555687921412_Large.png"}, {"code": "B8", "name": "CoverStyl interior film B8 golden oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8744_638392560966848385_Large.png"}, {"code": "B50", "name": "CoverStyl interior film B50 creme wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8745_638392563275138445_Large.png"}, {"code": "CT02", "name": "CoverStyl interior film CT02 traditional oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8746_638392565191708745_Large.png"}, {"code": "CT35", "name": "CoverStyl interior film CT35 golden ebony op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8747_638392567714375012_Large.png"}, {"code": "CT58", "name": "CoverStyl interior film CT58 faded grey wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8748_638392570027821462_Large.png"}, {"code": "CT69", "name": "CoverStyl interior film CT69 cream brown op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8749_638392572069704703_Large.png"}, {"code": "CT82", "name": "CoverStyl interior film CT82 light oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8750_638392573848774125_Large.png"}, {"code": "D1", "name": "CoverStyl interior film D1 teak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8751_638392575769562976_Large.png"}, {"code": "D4", "name": "CoverStyl interior film D4 dark zebrano op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8752_638392577805039706_Large.png"}, {"code": "E50", "name": "CoverStyl interior film E50 brownish oak style op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8753_638392595535110386_Large.png"}, {"code": "F4", "name": "CoverStyl interior film F4 modern oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8916_638394594221283426_Large.png"}, {"code": "F5", "name": "CoverStyl interior film F5 dark oak structured op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8754_638392597542305954_Large.png"}, {"code": "F6", "name": "CoverStyl interior film F6 aged oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8755_638392599689970910_Large.png"}, {"code": "F7", "name": "CoverStyl interior film F7 silverback wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8756_638392601693728796_Large.png"}, {"code": "G0", "name": "CoverStyl interior film G0 line oak structured op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8757_638392603687643190_Large.png"}, {"code": "G6", "name": "CoverStyl interior film G6 light grey wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8758_638392605770620874_Large.png"}, {"code": "H4", "name": "CoverStyl interior film H4 hardwood panel op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8759_638392623252092894_Large.png"}, {"code": "H10", "name": "CoverStyl interior film H10 light grey wood panel op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8917_638394596758481036_Large.png"}, {"code": "H50", "name": "CoverStyl interior film H50 light parquet op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8760_638392627013984330_Large.png"}, {"code": "AA14", "name": "CoverStyl interior film high resistance AA14 original oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9595_638668260830322973_Large.png"}, {"code": "CT58", "name": "CoverStyl interior film high resistance CT58 faded grey op 122 cm", "category": "High Resistance", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9596_638668263215021953_Large.png"}, {"code": "F4", "name": "CoverStyl interior film high resistance F4 bucolic oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9597_638668265422063705_Large.png"}, {"code": "J4", "name": "CoverStyl interior film high resistance J4 lacquered white op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9598_638668267499573815_Large.png"}, {"code": "J5", "name": "CoverStyl interior film high resistance J5 lacquered black op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9599_638668269453489502_Large.png"}, {"code": "NE31", "name": "CoverStyl interior film high resistance NE31 statuary white op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9600_638668271453811550_Large.png"}, {"code": "NE70", "name": "CoverStyl interior film high resistance NE70 onyx gold op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9601_638668273501946657_Large.png"}, {"code": "NF40", "name": "CoverStyl interior film high resistance NF40 smooth oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9602_638668275391799207_Large.png"}, {"code": "NF98", "name": "CoverStyl interior film high resistance NF98 armani nero op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9603_638668277171338790_Large.png"}, {"code": "U19", "name": "CoverStyl interior film high resistance U19 cement grey op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9604_638668280247446456_Large.png"}, {"code": "U50", "name": "CoverStyl interior film high resistance U50 nero marquina op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9606_638668284136839763_Large.png"}, {"code": "UNKNOWN", "name": "CoverStyl interior film high-resistance-u20-cement-dark op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9605_638668282106830255_Large.png"}, {"code": "I9", "name": "CoverStyl interior film I9 natural oak grain op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8761_638392629411963237_Large.png"}, {"code": "I10", "name": "CoverStyl interior film I10 mario grey oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8762_638392680348689779_Large.png"}, {"code": "I14", "name": "CoverStyl interior film I14 maymac oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8763_638392682513698205_Large.png"}, {"code": "J2", "name": "CoverStyl interior film J2 black wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8764_638392691239184791_Large.png"}, {"code": "J3", "name": "CoverStyl interior film J3 megeve white velvet grain op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8765_638392700159675501_Large.png"}, {"code": "J4", "name": "CoverStyl interior film J4 laquered white op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8766_638392703653908238_Large.png"}, {"code": "J5", "name": "CoverStyl interior film J5 laquered black op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8767_638392705679069121_Large.png"}, {"code": "J14", "name": "CoverStyl interior film J14 white wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8768_638392707534514913_Large.png"}, {"code": "J17", "name": "CoverStyl interior film J17 white light wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8769_638392709839766455_Large.png"}, {"code": "J18", "name": "CoverStyl interior film J18 grey wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8770_638392714677082681_Large.png"}, {"code": "K1", "name": "CoverStyl interior film K1 mat black velvet grain op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8771_638392752251452245_Large.png"}, {"code": "K4", "name": "CoverStyl interior film K4 solid light brown op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8772_638392754895368345_Large.png"}, {"code": "K5", "name": "CoverStyl interior film K5 grey velvet op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8773_638392758399913316_Large.png"}, {"code": "K6", "name": "CoverStyl interior film K6 grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8774_638392760176014833_Large.png"}, {"code": "K7", "name": "CoverStyl interior film K7 cream grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8775_638392765566143082_Large.png"}, {"code": "K101", "name": "CoverStyl interior film K101 chromed metal op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8918_638394599823734967_Large.png"}, {"code": "L2", "name": "CoverStyl interior film L2 orangey red velvet grain op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8776_638392767408962975_Large.png"}, {"code": "M4", "name": "CoverStyl interior film M4 solid pale blue op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8777_638392769404896153_Large.png"}, {"code": "M6", "name": "CoverStyl interior film M6 steel blue op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8778_638392771177716738_Large.png"}, {"code": "M7", "name": "CoverStyl interior film M7 brio cream velvet op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8779_638392773528351576_Large.png"}, {"code": "M8", "name": "CoverStyl interior film M8 bright yellow op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8780_638392775330546216_Large.png"}, {"code": "M9", "name": "CoverStyl interior film M9 dark ash grey velvet grain op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8781_638392777118991136_Large.png"}, {"code": "M10", "name": "CoverStyl interior film M10 light cream shell op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8782_638392779546657274_Large.png"}, {"code": "MK13", "name": "CoverStyl interior film MK13 scratched beton op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8783_638392787163270577_Large.png"}, {"code": "MK14", "name": "CoverStyl interior film MK14 mat ash black marble op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8784_638392790728847029_Large.png"}, {"code": "MK15", "name": "CoverStyl interior film MK15 cream concrete op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8785_638392792594166702_Large.png"}, {"code": "MK18", "name": "CoverStyl interior film MK18 honey comb cream op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8786_638392795248239564_Large.png"}, {"code": "N3", "name": "CoverStyl interior film N3 eggshell velvet grain op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8787_638392800688417323_Large.png"}, {"code": "NE13", "name": "CoverStyl interior film NE13 shimmery golden wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8788_638392832628237090_Large.png"}, {"code": "NE24", "name": "CoverStyl interior film NE24 light grey concrete plaster op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8789_638392835505904179_Large.png"}, {"code": "NE26", "name": "CoverStyl interior film NE26 dark grey concrete plaster op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8790_638392839272949894_Large.png"}, {"code": "NE29", "name": "CoverStyl interior film NE29 white and multicolored stone plaster op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8791_638392841469028216_Large.png"}, {"code": "NE31", "name": "CoverStyl interior film NE31 mat white marble op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8792_638392843947803256_Large.png"}, {"code": "NE32", "name": "CoverStyl interior film NE32 mat white and grey marble op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8793_638392846628126271_Large.png"}, {"code": "NE37", "name": "CoverStyl interior film NE37 silver and brown lined pattern op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8794_638392917389168297_Large.png"}, {"code": "NE40", "name": "CoverStyl interior film NE40 grey leather op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8795_638393431212964768_Large.png"}, {"code": "NE41", "name": "CoverStyl interior film NE41 light grey leather op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8796_638393435835170001_Large.png"}, {"code": "NE42", "name": "CoverStyl interior film NE42 caramel leather op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8797_638393437832833804_Large.png"}, {"code": "NE46", "name": "CoverStyl interior film NE46 grey ebony op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8798_638393456253487583_Large.png"}, {"code": "NE47", "name": "CoverStyl interior film NE47 soft brushed gold op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8799_638393460743348817_Large.png"}, {"code": "NE49", "name": "CoverStyl interior film NE49 soft brushed dark silver op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8800_638393463211952224_Large.png"}, {"code": "NE51", "name": "CoverStyl interior film NE51 soft brushed silver op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8801_638393465066646923_Large.png"}, {"code": "NE54", "name": "CoverStyl interior film NE54 clean mint op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8802_638393467735876080_Large.png"}, {"code": "NE61", "name": "CoverStyl interior film NE61 cream grey oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8803_638393477082788725_Large.png"}, {"code": "NE68", "name": "CoverStyl interior film NE68 cream oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8804_638393480775147689_Large.png"}, {"code": "NE70", "name": "CoverStyl interior film NE70 mat beige marble op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8805_638393482879704572_Large.png"}, {"code": "NE72", "name": "CoverStyl interior film NE72 black stripes white marble op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8806_638393486625869878_Large.png"}, {"code": "NE73", "name": "CoverStyl interior film NE73 mika dark black stripped pattern op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8807_638393498144162630_Large.png"}, {"code": "NE74", "name": "CoverStyl interior film NE74 mika light beige stripped pattern op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8808_638393497619629476_Large.png"}, {"code": "NE77", "name": "CoverStyl interior film NE77 super mat light eggshell op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8809_638393502016990212_Large.png"}, {"code": "NE78", "name": "CoverStyl interior film NE78 super mat brown beige op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8810_638393565424478616_Large.png"}, {"code": "NE79", "name": "CoverStyl interior film NE79 super mat light cloud grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8811_638393573013572592_Large.png"}, {"code": "NE80", "name": "CoverStyl interior film NE80 super mat graphite op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8812_638393576854887763_Large.png"}, {"code": "NE81", "name": "CoverStyl interior film NE81 super mat charcoal op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8813_638393578543327318_Large.png"}, {"code": "NE82", "name": "CoverStyl interior film NE82 super mat fossil grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8814_638393580300271432_Large.png"}, {"code": "NF06", "name": "CoverStyl interior film NF06 blues op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8815_638393584168350945_Large.png"}, {"code": "NF13", "name": "CoverStyl interior film NF13 soft winter green op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8816_638393587476134439_Large.png"}, {"code": "NF14", "name": "CoverStyl interior film NF14 soft navy blue op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8817_638393592534583715_Large.png"}, {"code": "NF19", "name": "CoverStyl interior film NF19 painted wood beige op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8818_638393613100760830_Large.png"}, {"code": "NF28", "name": "CoverStyl interior film NF28 structured grey oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8819_638393615988213655_Large.png"}, {"code": "NF29", "name": "CoverStyl interior film NF29 structured cream oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8820_638393618338434556_Large.png"}, {"code": "NF32", "name": "CoverStyl interior film NF32 structured beige oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8821_638393620351723370_Large.png"}, {"code": "NF34", "name": "CoverStyl interior film NF34 beige golden oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8822_638393622225793248_Large.png"}, {"code": "NF36", "name": "CoverStyl interior film NF36 smooth light oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8823_638393624062831758_Large.png"}, {"code": "NF40", "name": "CoverStyl interior film NF40 smooth oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8824_638393625960182737_Large.png"}, {"code": "NF43", "name": "CoverStyl interior film NF43 structured oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8825_638393627675501949_Large.png"}, {"code": "NF44", "name": "CoverStyl interior film NF44 light brown oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8826_638393629574884576_Large.png"}, {"code": "NF46", "name": "CoverStyl interior film NF46 smooth oak wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8827_638393631667236321_Large.png"}, {"code": "NF47", "name": "CoverStyl interior film NF47 smooth red oak wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8828_638393633842557211_Large.png"}, {"code": "NF55", "name": "CoverStyl interior film NF55 ebony dark brown op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8829_638393643816345988_Large.png"}, {"code": "NF56", "name": "CoverStyl interior film NF56 ebony black wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8830_638393646743076042_Large.png"}, {"code": "NF66", "name": "CoverStyl interior film NF66 smooth oaky oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8831_638393648940740621_Large.png"}, {"code": "NF73", "name": "CoverStyl interior film NF73 grey beech op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8832_638393650716217184_Large.png"}, {"code": "NF78", "name": "CoverStyl interior film NF78 light oaky oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8833_638393652863882201_Large.png"}, {"code": "NF83", "name": "CoverStyl interior film NF83 driftwood brown op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8834_638393657071746291_Large.png"}, {"code": "NF98", "name": "CoverStyl interior film NF98 structured marble dark op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8835_638393659214098439_Large.png"}, {"code": "NF99", "name": "CoverStyl interior film NF99 lombarda grigio op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8836_638393665775529007_Large.png"}, {"code": "NG01", "name": "CoverStyl interior film NG01 lombarda bianco op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8837_638393687518894843_Large.png"}, {"code": "NG02", "name": "CoverStyl interior film NG02 spotted cement grey op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8838_638393691537191542_Large.png"}, {"code": "NG04", "name": "CoverStyl interior film NG04 cream marble op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8839_638393693834544316_Large.png"}, {"code": "NG07", "name": "CoverStyl interior film NG07 woven light brown op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8840_638393696116584337_Large.png"}, {"code": "NG11", "name": "CoverStyl interior film NG11 woven parquet beige op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8841_638393698770344825_Large.png"}, {"code": "NG20", "name": "CoverStyl interior film NG20 edgy cream op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8919_638394613652342476_Large.png"}, {"code": "NG31", "name": "CoverStyl interior film NG31 gloss white marble op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8842_638393701681917771_Large.png"}, {"code": "NH02", "name": "CoverStyl interior film NH02 white flour op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8843_638393703477080541_Large.png"}, {"code": "NH05", "name": "CoverStyl interior film NH05 pistachio green op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8844_638393705231618491_Large.png"}, {"code": "NH06", "name": "CoverStyl interior film NH06 rose sand op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8845_638393707113969710_Large.png"}, {"code": "NH08", "name": "CoverStyl interior film NH08 forest green op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8846_638393708293036826_Large.png"}, {"code": "NH10", "name": "CoverStyl interior film NH10 terrazzo mixed blue op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8847_638393709654604621_Large.png"}, {"code": "NH11", "name": "CoverStyl interior film NH11 light etruscan grey op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8848_638393711459141814_Large.png"}, {"code": "NH15", "name": "CoverStyl interior film NH15 smokey green op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8849_638393712965240683_Large.png"}, {"code": "NH18", "name": "CoverStyl interior film NH18 natural linen op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8850_638393715389156175_Large.png"}, {"code": "NH19", "name": "CoverStyl interior film NH19 beige linen op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8851_638393716844761088_Large.png"}, {"code": "NH21", "name": "CoverStyl interior film NH21 soft green op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8852_638393718239141580_Large.png"}, {"code": "NH22", "name": "CoverStyl interior film NH22 warm grey op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8853_638393719605553082_Large.png"}, {"code": "NH24", "name": "CoverStyl interior film NH24 deep ocean op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8854_638393720906339843_Large.png"}, {"code": "NH27", "name": "CoverStyl interior film NH27 white fog of alpine op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8855_638393722199939907_Large.png"}, {"code": "NH33", "name": "CoverStyl interior film NH33 off white cement op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8856_638393723771040395_Large.png"}, {"code": "NH35", "name": "CoverStyl interior film NH35 beige ram granite op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8857_638393725741048532_Large.png"}, {"code": "NH36", "name": "CoverStyl interior film NH36 bronze patina op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8858_638393726977615982_Large.png"}, {"code": "NH37", "name": "CoverStyl interior film NH37 anthracite patina op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8859_638393728225589566_Large.png"}, {"code": "NH39", "name": "CoverStyl interior film NH39 pietra di cardoso grigio op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8860_638393729736064413_Large.png"}, {"code": "NH40", "name": "CoverStyl interior film NH40 Terazzo grey op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8861_638393731069198093_Large.png"}, {"code": "NH41", "name": "CoverStyl interior film NH41 Terazzo beige op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8862_638393743009902583_Large.png"}, {"code": "NH45", "name": "CoverStyl interior film NH45 tundra op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8863_638393744548189824_Large.png"}, {"code": "NH46", "name": "CoverStyl interior film NH46 etruscan grey op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8864_638393747604491148_Large.png"}, {"code": "NH54", "name": "CoverStyl interior film NH54 grey cement op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8865_638393761805485327_Large.png"}, {"code": "NH57", "name": "CoverStyl interior film NH57 charcoal blue op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8866_638393763595492431_Large.png"}, {"code": "NH60", "name": "CoverStyl interior film NH60 copper op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8867_638393764967997967_Large.png"}, {"code": "NH71", "name": "CoverStyl interior film NH71 split wood op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8868_638393766470972516_Large.png"}, {"code": "NH73", "name": "CoverStyl interior film NH73 warm walnut op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8869_638393767910509414_Large.png"}, {"code": "NH75", "name": "CoverStyl interior film NH75 eucalyptus op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8870_638393769280216936_Large.png"}, {"code": "NH77", "name": "CoverStyl interior film NH77 honey walnut op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8871_638393770542565613_Large.png"}, {"code": "NH79", "name": "CoverStyl interior film NH79 african teak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8872_638393771591319737_Large.png"}, {"code": "NH80", "name": "CoverStyl interior film NH80 sand oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8873_638393772653042722_Large.png"}, {"code": "NH91", "name": "CoverStyl interior film NH91 dark grey stripes op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8874_638393773988672959_Large.png"}, {"code": "NH92", "name": "CoverStyl interior film NH92 light grey stripes op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8875_638393789400364351_Large.png"}, {"code": "NH93", "name": "CoverStyl interior film NH93 off white stripes op 122 cm", "category": "Texture", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8876_638393790462868731_Large.png"}, {"code": "AG14", "name": "CoverStyl interior film pvc free AG14 cream golden oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9607_638668287213416716_Large.png"}, {"code": "B3", "name": "CoverStyl interior film pvc free B3 natural maple op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9608_638668289006549850_Large.png"}, {"code": "B8", "name": "CoverStyl interior film pvc free B8 heritage oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9609_638668290826714837_Large.png"}, {"code": "F4", "name": "CoverStyl interior film pvc free F4 bucolic oak op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9610_638668292710785964_Large.png"}, {"code": "J2", "name": "CoverStyl interior film pvc free J2 rich black op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9612_638668296859555502_Large.png"}, {"code": "J3", "name": "CoverStyl interior film pvc free J3 ultra white op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9613_638668298712220768_Large.png"}, {"code": "J14", "name": "CoverStyl interior film pvc free J14 rich white op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9611_638668294673764069_Large.png"}, {"code": "K1", "name": "CoverStyl interior film pvc free K1 black matt op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9614_638668300312853436_Large.png"}, {"code": "K4", "name": "CoverStyl interior film pvc free K4 khaki op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9615_638668301889423220_Large.png"}, {"code": "K5", "name": "CoverStyl interior film pvc free K5 drizzle op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9616_638668303494274447_Large.png"}, {"code": "K6", "name": "CoverStyl interior film pvc free K6 light grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9617_638668305084594454_Large.png"}, {"code": "NE31", "name": "CoverStyl interior film pvc free NE31 statuary white op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9618_638668308779143433_Large.png"}, {"code": "NF98", "name": "CoverStyl interior film pvc free NF98 armani nero op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9619_638668310468682888_Large.png"}, {"code": "U19", "name": "CoverStyl interior film pvc free U19 cement grey op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9620_638668312062128284_Large.png"}, {"code": "U20", "name": "CoverStyl interior film pvc free U20 cement dark op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9621_638668313680886181_Large.png"}, {"code": "Q2", "name": "CoverStyl interior film Q2 brushed silver op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8878_638394281290883085_Large.png"}, {"code": "Q3", "name": "CoverStyl interior film Q3 brushed gold op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8879_638394284299019635_Large.png"}, {"code": "Q50", "name": "CoverStyl interior film Q50 dark brushed silver op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8880_638394285979494690_Large.png"}, {"code": "R5", "name": "CoverStyl interior film R5 gold disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8891_638394305632697071_Large.png"}, {"code": "R6", "name": "CoverStyl interior film R6 yellow disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8892_638394307323329216_Large.png"}, {"code": "R7", "name": "CoverStyl interior film R7 silver disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8893_638394308782866334_Large.png"}, {"code": "R8", "name": "CoverStyl interior film R8 red disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8894_638394310405487655_Large.png"}, {"code": "R9", "name": "CoverStyl interior film R9 black disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8895_638394311808930396_Large.png"}, {"code": "R10", "name": "CoverStyl interior film R10 copper disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8881_638394287799033038_Large.png"}, {"code": "R11", "name": "CoverStyl interior film R11 midnight blue disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8882_638394290299042789_Large.png"}, {"code": "R12", "name": "CoverStyl interior film R12 green disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8883_638394291964830627_Large.png"}, {"code": "R13", "name": "CoverStyl interior film R13 pink disco op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8884_638394293464836395_Large.png"}, {"code": "R14", "name": "CoverStyl interior film R14 aurora op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8885_638394294958592218_Large.png"}, {"code": "R15", "name": "CoverStyl interior film R15 navy blue op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8886_638394297673290246_Large.png"}, {"code": "R16", "name": "CoverStyl interior film R16 moka op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8887_638394299250640187_Large.png"}, {"code": "R17", "name": "CoverStyl interior film R17 butter op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8888_638394300750177251_Large.png"}, {"code": "R18", "name": "CoverStyl interior film R18 salmon op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8889_638394302122839082_Large.png"}, {"code": "R19", "name": "CoverStyl interior film R19 champagne op 122 cm", "category": "Glitter", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8890_638394303507688099_Large.png"}, {"code": "RM03", "name": "CoverStyl interior film RM03 grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8896_638394331555127974_Large.png"}, {"code": "RM04", "name": "CoverStyl interior film RM04 brown chocolate op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8897_638394334283263496_Large.png"}, {"code": "RM06", "name": "CoverStyl interior film RM06 dark grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8898_638394336102801741_Large.png"}, {"code": "RM10", "name": "CoverStyl interior film RM10 white velvet grain op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8899_638394337284056382_Large.png"}, {"code": "RM13", "name": "CoverStyl interior film RM13 beige op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8900_638394338847968764_Large.png"}, {"code": "RM23", "name": "CoverStyl interior film RM23 deep blue op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8901_638394340122036232_Large.png"}, {"code": "RM27", "name": "CoverStyl interior film RM27 light grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8902_638394341284384734_Large.png"}, {"code": "RM29", "name": "CoverStyl interior film RM29 anthracite grey op 122 cm", "category": "Solid", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8903_638394342893766010_Large.png"}, {"code": "ST02", "name": "CoverStyl interior film ST02 might beige mesh op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8904_638394344745179278_Large.png"}, {"code": "T12", "name": "CoverStyl interior film T12 dark grey brushed fabric op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8905_638394347010364576_Large.png"}, {"code": "U10", "name": "CoverStyl interior film U10 slate concrete op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8906_638394348695214864_Large.png"}, {"code": "U19", "name": "CoverStyl interior film U19 light concrete op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8907_638394351515382063_Large.png"}, {"code": "U20", "name": "CoverStyl interior film U20 dark concrete op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8908_638394353878204102_Large.png"}, {"code": "U21", "name": "CoverStyl interior film U21 brown concrete op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8909_638394355736648824_Large.png"}, {"code": "U50", "name": "CoverStyl interior film U50 ash black marble op 122 cm", "category": "Wood", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8910_638394388842244873_Large.png"}, {"code": "W6", "name": "CoverStyl interior film W6 rust op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8911_638394391000846487_Large.png"}, {"code": "W7", "name": "CoverStyl interior film W7 red bricks op 122 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8912_638394393113511239_Large.png"}, {"code": "X51", "name": "CoverStyl interior film X51 coal black leather op 122 cm", "category": "Textile", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8913_638394403957615310_Large.png"}, {"code": "X52", "name": "CoverStyl interior film X52 togo white op 122 cm", "category": "Leather", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8914_638394405863131100_Large.png"}, {"code": "UNKNOWN", "name": "CoverStyl interior film XL black matt op 137 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9622_638668315445894501_Large.png"}, {"code": "UNKNOWN", "name": "CoverStyl interior film XL ultra white op 137 cm", "category": "Stone", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_9623_638668317012620840_Large.png"}, {"code": "Z2", "name": "CoverStyl interior film Z2 black laser op 122 cm", "category": "Metal", "image": "https://webshop.sign4sign.nl/Webshop/Data/Images/Product_8915_638394408229390385_Large.png"}];
