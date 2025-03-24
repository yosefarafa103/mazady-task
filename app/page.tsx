import { getAllCategrories } from "./_actions/getAllCategories";
import NavigationToRecorces from "./_atoms/NavigationToRecorces";
import BodyWrapper from "./_components/BodyWrapper";
import BoxContainer from "./_components/BoxContainer";
import Header from "./_components/Header";
import PersonProfileInfo from "./_components/PersonProfileInfo";
import ProductsContainer from "./_components/ProductsContainer";
import QrCodePart from "./_components/QrCodePart";
import RecourceDataContainer from "./_components/RecourceDataContainer";
export default async function Home() {
  // console.log(await getAllCategrories()) // Server Action Result
  return (
    <>
      <Header />
      <BodyWrapper>
        <section className="flex gap-5 max-lg:flex-col">
          <section className="flex-[0.8] w-full flex-col gap-4" >
            <PersonProfileInfo />
            <QrCodePart />
          </section>
          <section className="flex-[2] w-full">
            <BoxContainer>
              <NavigationToRecorces />
              <RecourceDataContainer />
              <ProductsContainer />
            </BoxContainer>
          </section>
        </section>
      </BodyWrapper>
    </>
  );
}