import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../components/backbtn/BackBtn";
import Loader from "../components/Loader/Loader";
import { RepoProps } from "../types/repos";
import Repositorio from "../components/repositorio/Repositorio";

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadRepos = async function (username: string) {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                    throw new Error('Data Error');
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        if (username) {
            loadRepos(username);
        }
    }, [username]);

    if(!repos && loading) return <Loader/>

    return (
        <div className="container mx-auto">
            <p className="text-xl font-bold mb-4">Repositorio do {username}</p>
            <BackBtn />
            {loading && <Loader />}
            {repos &&  repos.length === 0 && <p>Não há repositorios</p>}
            {repos && repos.length > 0 && (
                <div>
                 <h2 className="text-lg font-semibold mb-2 text-black">Repositorios</h2>
                 {repos.map((repos:RepoProps) => (
                   <Repositorio key={repos.name} {...repos} />
                 )).slice(0,5)}
                </div>
            )}
        </div>
    );
};

export default Repos