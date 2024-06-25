import Layout from "../components/Layout";
import useAppData from "../data/hook/useAppData";


export default function Tarefas() {
  const ctx = useAppData()

  return (
      <Layout titulo="Tarefas" 
        subtitulo="Nesta aba você poderá acompanhar suas tarefas!">
      </Layout>
  )
}