'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Player } from "@/types";
import { useState } from "react";
function BuilderPageClient({players: initialPlayers, onCreate} : {players: Player[], onCreate: (formData: FormData)=> void}) {

    const[players, setPlayers] = useState<Player[]>(initialPlayers)
    
    function handleAddPlayer(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        setPlayers(players => players.concat({name: formData.get('player') as string, score: 0, matches: 0}))

        event.currentTarget.reset();
    }
    return (
        <section className="m-auto max-w-md grid gap-4">
            <form action="" className="flex gap-4" onSubmit={handleAddPlayer}>
                <Input placeholder="Nombre del jugador" name="player"/>
                <Button variant={"secondary"}>Agregar jugador</Button>
            </form>
            <form action={onCreate} className="grid gap-4">
                <Table className="border">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {players.map(({name}) => (
                        <TableRow key={name}>
                            <TableCell>{name}</TableCell>
                            <TableCell className="text-right">  
                                <Checkbox name="player" value={name}/>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button type="submit">Armar equipos</Button>
            </form>
        </section>
    )
}

export default BuilderPageClient