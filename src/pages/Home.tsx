import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ActionButtons } from "../components/ActionButton";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Animations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ActionButtons />
      </IonContent>
    </IonPage>
  );
};

export default Home;
