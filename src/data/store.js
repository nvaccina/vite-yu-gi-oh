import { reactive } from "vue";

export const store = reactive ({

  apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardsList: [],
  listCardType: [],
  typeToSearch: null,
  isLoading: true,
  cardOffset: 0,
  cardNumber: 20,
})

/**/