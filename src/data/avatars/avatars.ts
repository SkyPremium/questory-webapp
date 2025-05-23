import avatar1 from "@/assets/avatars/avatar1.png";
import avatar2 from "@/assets/avatars/avatar2.png";
import avatar3 from "@/assets/avatars/avatar3.png";
import avatar4 from "@/assets/avatars/avatar4.png";
import avatar5 from "@/assets/avatars/avatar5.png";

export type AvatarUnlock =
  | "default"
  | "shop"
  | "season_pass"
  | "bonus_day_7"
  | "book_reward";

export interface AvatarData {
  id: string;
  name: string;
  image: string;
  description: string;
  unlock: AvatarUnlock;
}

export const allAvatars: AvatarData[] = [
  {
    id: "erik",
    name: "Эрик",
    image: avatar1,
    description: "Храбрый исследователь. Стартовый аватар.",
    unlock: "default",
  },
  {
    id: "kai",
    name: "Кай",
    image: avatar2,
    description: "Мудрый следопыт. Также доступен с первого дня.",
    unlock: "default",
  },
  {
    id: "thelma",
    name: "Тельма",
    image: avatar3,
    description: "Таинственная шаманка. Начальный выбор.",
    unlock: "default",
  },
  {
    id: "aviel",
    name: "Авиэль",
    image: avatar4,
    description: "Воин с холодным сердцем. Один из базовых аватаров.",
    unlock: "default",
  },
  {
    id: "leo",
    name: "Лео",
    image: avatar5,
    description: "Легендарный охотник. Стартовый аватар.",
    unlock: "default",
  },
];
