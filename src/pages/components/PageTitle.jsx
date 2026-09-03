import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{`키즈월드 | ${title}`}</title>
    </Helmet>
  );
}
