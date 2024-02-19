import api from "@/api"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
async function PlayersPage() {
    const players = await api.player.list();
    return (
        <Table className="border">
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Partidos</TableHead>
                    <TableHead className="text-right">Valoración</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players.map(({name, matches, score}) => (
                <TableRow key={name}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{matches}</TableCell>
                    <TableCell className="text-right">{score}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
    )
}

export default PlayersPage