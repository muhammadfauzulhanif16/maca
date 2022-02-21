import { FC } from "react";
import { HomeComponent } from "../../components/Home";

interface HomePageProps {
  books: [];
  reading: [];
  finished: [];
}

export const HomePage: FC<HomePageProps> = ({
  books,
  reading,
  finished,
}): JSX.Element => {
  return <HomeComponent books={books} reading={reading} finished={finished} />;
};
