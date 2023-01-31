const mockupData = [
  {
    date: "20230101",
    value: 3.25,
  },
  {
    date: "20230102",
    value: null,
  },
  {
    date: "20230103",
    value: 3.2,
  },
  {
    date: "20230104",
    value: 3.21,
  },
  {
    date: "20230105",
    value: 3.25,
  },
  {
    date: "20230106",
    value: 3.27,
  },
  {
    date: "20230107",
    value: 3.21,
  },
  {
    date: "20230108",
    value: 3.25,
  },
  {
    date: "20230109",
    value: 3.22,
  },
  {
    date: "20230110",
    value: 3.2,
  },
  {
    date: "20230111",
    value: 3.21,
  },
  {
    date: "20230112",
    value: 3.25,
  },
  {
    date: "20230113",
    value: 3.27,
  },
  {
    date: "20230114",
    value: 3.21,
  },
  {
    date: "20230116",
    value: 3.21,
  },
  {
    date: "20230117",
    value: 3.21,
  },
  {
    date: "20230118",
    value: 3.21,
  },
  {
    date: "20230119",
    value: 3.21,
  },
  {
    date: "20230120",
    value: 3.21,
  },
  {
    date: "20230121",
    value: 3.21,
  },
  {
    date: "20230122",
    value: 3.21,
  },
  {
    date: "20230123",
    value: 3.21,
  },
  {
    date: "20230124",
    value: 3.21,
  },
  {
    date: "20230125",
    value: 3.21,
  },
  {
    date: "20230126",
    value: 3.21,
  },
  {
    date: "20230127",
    value: 3.21,
  },
  {
    date: "20230128",
    value: 3.21,
  },
  {
    date: "20230129",
    value: 3.21,
  },
  {
    date: "20230130",
    value: 3.21,
  },
  {
    date: "20230131",
    value: 3.21,
  },
  {
    date: "20230201",
    value: 3.21,
  },
  {
    date: "20230202",
    value: 3.21,
  },
  {
    date: "20230203",
    value: 3.21,
  },
  {
    date: "20230204",
    value: 3.21,
  },
  {
    date: "20230205",
    value: 3.21,
  },
  {
    date: "20230206",
    value: 3.21,
  },
  {
    date: "20230207",
    value: 3.21,
  },
  {
    date: "20230208",
    value: 3.21,
  },
  {
    date: "20230209",
    value: 3.21,
  },
  {
    date: "20230210",
    value: 3.21,
  },
  {
    date: "20230211",
    value: 3.21,
  },
  {
    date: "20230212",
    value: 3.21,
  },
  {
    date: "20230213",
    value: 3.21,
  },
  {
    date: "20230214",
    value: 3.21,
  },
  {
    date: "20230215",
    value: 3.21,
  },
  {
    date: "20230216",
    value: 3.21,
  },
  {
    date: "20230217",
    value: 3.21,
  },
  {
    date: "20230218",
    value: 3.21,
  },
  {
    date: "20230219",
    value: 3.21,
  },
  {
    date: "20230220",
    value: 3.21,
  },
  {
    date: "20230221",
    value: 3.21,
  },
  {
    date: "20230222",
    value: 3.21,
  },
  {
    date: "20230223",
    value: 3.21,
  },
  {
    date: "20230224",
    value: 3.21,
  },
  {
    date: "20230225",
    value: 3.21,
  },
  {
    date: "20230226",
    value: 3.21,
  },
  {
    date: "20230227",
    value: 3.21,
  },
  {
    date: "20230228",
    value: 3.21,
  },
  {
    date: "20230229",
    value: 3.21,
  },
  {
    date: "20230301",
    value: 3.21,
  },
  {
    date: "20230301",
    value: 3.21,
  },
  {
    date: "20230302",
    value: 3.21,
  },
  {
    date: "20230303",
    value: 3.21,
  },
  {
    date: "20230304",
    value: 3.21,
  },
  {
    date: "20230305",
    value: 3.21,
  },
  {
    date: "20230306",
    value: 3.21,
  },
  {
    date: "20230307",
    value: 3.21,
  },
  {
    date: "20230308",
    value: 3.21,
  },
  {
    date: "20230309",
    value: 3.21,
  },
  {
    date: "20230310",
    value: 3.21,
  },
  {
    date: "20230311",
    value: 3.21,
  },
  {
    date: "20230312",
    value: 3.21,
  },
  {
    date: "20230313",
    value: 3.21,
  },
  {
    date: "20230314",
    value: 3.21,
  },
  {
    date: "20230315",
    value: 3.21,
  },
  {
    date: "20230316",
    value: 3.21,
  },
  {
    date: "20230317",
    value: 3.21,
  },
  {
    date: "20230318",
    value: 3.21,
  },
  {
    date: "20230319",
    value: 3.21,
  },
  {
    date: "20230320",
    value: 3.21,
  },
  {
    date: "20230321",
    value: 3.21,
  },
  {
    date: "20230322",
    value: 3.21,
  },
  {
    date: "20230323",
    value: 3.21,
  },
  {
    date: "20230324",
    value: 3.21,
  },
  {
    date: "20230325",
    value: 3.21,
  },
  {
    date: "20230326",
    value: 3.21,
  },
  {
    date: "20230327",
    value: 3.21,
  },
  {
    date: "20230328",
    value: 3.21,
  },
  {
    date: "20230329",
    value: 3.21,
  },
  {
    date: "20230330",
    value: 3.21,
  },
  {
    date: "20230331",
    value: 10,
  },
];

export default mockupData;
