import { Location } from "history";
import React, { useEffect, useState } from "react";
import { Prompt, useLocation } from "react-router-dom";
import WarningDialog from "./PromptDialog";
interface Props {
  when?: boolean | undefined;
  navigate: (path: string) => void;
  shouldBlockNavigation: (location: Location) => boolean;
}
const RouteLeavingGuard = ({
  when,
  navigate,
  shouldBlockNavigation,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lastLocation, setLastLocation] = useState<Location | null>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);
  const currentLocation = useLocation();
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleBlockedNavigation = (nextLocation: Location): boolean => {
    if (nextLocation.pathname === currentLocation.pathname) return false;
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      setModalVisible(true);
      setLastLocation(nextLocation);
      return false;
    }
    return true;
  };
  const handleConfirmNavigationClick = () => {
    setModalVisible(false);
    setConfirmedNavigation(true);
  };
  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      // Navigate to the previous blocked location with your navigate function
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation, navigate]);
  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      {/* Your own alert/dialog/modal component */}
      <WarningDialog
        open={modalVisible}
        titleText="Abandon current game?"
        contentText="You will lose your current throw history."
        cancelButtonText="DISMISS"
        confirmButtonText="CONFIRM"
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
      />
    </>
  );
};
export default RouteLeavingGuard;
