import useGameTrailer from "../Hooks/useGameTrailer";

interface Props {
    id: number;
}

function GameTrailer({ id }: Props) {
    const { data, error, isLoading } = useGameTrailer(id);
    const first = data?.results[0];

    if(!first) return null;

    if (isLoading) return null;

    if (error) throw error;

    return (
        <video
            src={first.data[480]}
            poster={first.preview}
            controls
        />
    );
}

export default GameTrailer;