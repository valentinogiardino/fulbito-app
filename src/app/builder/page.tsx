import React from 'react'
import BuilderPageClient from "./page.client";
import api from "@/api";
import { redirect } from "next/navigation";

async function BuilderPage() {
    const players = await api.player.list();

    async function createTeams(formData: FormData){
        'use server';

        const players = formData.getAll("player")

        const searchParams = new URLSearchParams();

        for (const player of players) {
            searchParams.append("players", player as string)
        }

        redirect(`/builder/match?${searchParams.toString()}`);

    }
    return (
        <BuilderPageClient players={players} onCreate={createTeams}/>
    )
}

export default BuilderPage