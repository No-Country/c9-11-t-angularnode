import { LinearProgress } from "@mui/material"
import { useAppContext } from "../context/AppContext";

export const LoadingBar = () => {

    const { state: { isLoading } } = useAppContext();
  return (
    isLoading && <LinearProgress color={"warning"} />
  )
}
