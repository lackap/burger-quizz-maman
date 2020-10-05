import Homepage from "../Homepage";
import NuggetsInit from "../NuggetsInit";
import SelOuPoivreInit from "../SelOuPoivreInit";
import QuickQuestionCard from "../QuickQuestionCard";
import MenuInit from "../MenuInit";
import QuestionCardRouting from "../QuestionCardRouting";
import AdditionInit from "../AdditionInit";
import BurgerDeLaMort from "../BurgerDeLaMort";

export default {
  home: {
    path: "/",
    title: "Homepage",
    component: Homepage,
  },
  nuggetsInit: {
    path: "/nuggets-init",
    title: "Nuggets - Jingle",
    component: NuggetsInit,
  },
  nuggetsRouting: {
    path: "/questions",
    title: "Questions",
    component: QuestionCardRouting,
  },
  seloupoivreInit: {
    path: "/seloupoivre-init",
    title: "Sel ou poivre - Jingle",
    component: SelOuPoivreInit,
  },
  quickQuestion: {
    path: "/quick-questions",
    title: "Question de rapidité",
    component: QuickQuestionCard,
  },
  menuInit: {
    path: "/menu-init",
    title: "Menu - Jingle",
    component: MenuInit,
  },
  additionInit: {
    path: "/addition-init",
    title: "Addition - Jingle",
    component: AdditionInit,
  },
  burgerDeLaMort: {
    path: "/burgerdelamort",
    title: "Burger de la mort",
    component: BurgerDeLaMort,
  },
};
