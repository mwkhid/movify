import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import { Link, Head, useForm } from "@inertiajs/react";

import Icon from "@mdi/react";
import { mdiPencil, mdiDelete, mdiRestore } from "@mdi/js";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={ auth }>
            <Head title="List of Movie" />
            <Link href={route('admin.dashboard.movie.create')}>
                <Button
                    type="button"
                    className="!w-40 mb-8"
                >
                    Insert New Movie
                </Button>
            </Link> 
            {flashMessage?.message && (<FlashMessage message={flashMessage.message} />)}
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr className="border-b-[12px] border-transparent">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie => (
                        <tr key={movie.id} className="border-b-[12px] border-transparent align-middle">
                            <td className="align-middle">
                                <img src={`/storage/${movie.thumbnail}`} className="w-32 rounded-md mx-auto" />
                            </td>
                            <td className="align-middle">{movie.name}</td>
                            <td className="align-middle">{movie.category}</td>
                            <td className="align-middle">{movie.rating.toFixed(1)}</td>
                            <td className="align-middle">
                                <div className="flex justify-center items-center gap-2">
                                    <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                        <Button
                                            type="button"
                                            variant="warning"
                                            className="flex items-center gap-1 !rounded-md !px-3 !py-2 text-sm"
                                        >
                                            <Icon path={mdiPencil} size={0.8} />
                                            <span>Edit</span>
                                        </Button>
                                    </Link>
                                    <div
                                        onClick={() => {
                                            movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)) :
                                                destroy(route('admin.dashboard.movie.destroy', movie.id));
                                        }}
                                    >
                                        <Button
                                            type="button"
                                            variant="danger"
                                            className="flex items-center gap-1 !rounded-md !px-3 !py-2 text-sm"
                                        >
                                            {movie.deleted_at ? (
                                                <>
                                                    <Icon path={mdiRestore} size={0.8} />
                                                    <span>Restore</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Icon path={mdiDelete} size={0.8} />
                                                    <span>Delete</span>
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </Authenticated>
    )
}