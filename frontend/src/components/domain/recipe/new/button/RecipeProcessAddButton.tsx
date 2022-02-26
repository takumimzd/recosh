import { Dispatch, SetStateAction } from "react"
import { AddIcon } from "@chakra-ui/icons"
import { PrimaryButton } from "components/common/button/PrimaryButton"

interface Props {
  processFormCount: number
  setProcessFormCount: Dispatch<SetStateAction<number>>
}

const RecipeProcessAddButton = ({processFormCount, setProcessFormCount}: Props) => {

  const handleAddProcess = () => {
    setProcessFormCount(processFormCount + 1)
  }

  return (
    <PrimaryButton onClick={handleAddProcess}>
      <AddIcon />
    </PrimaryButton>
  )
}

export default RecipeProcessAddButton