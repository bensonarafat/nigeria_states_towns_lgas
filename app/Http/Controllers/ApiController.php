<?php

namespace App\Http\Controllers;

use App\Models\Capital;
use App\Models\State;
use App\Models\Region;
use App\Http\Resources\StateResource;
use App\Http\Resources\RegionResource;

class ApiController extends Controller
{
    private $meta = [
        "meta" => [
            "name" => "Locus",
            "author" => "Arafat Benson",
            "url" => "https://www.codepym.com",
            "github" => "https://bit.ly/3IzGYKE",
            "version" => "1.0.0",
        ]
    ];

    public function index()
    {
        $states = State::orderBy("name", "ASC")->get();
        return StateResource::collection($states)->additional($this->meta);
        // return new StateResource($states);
    }

    public function states()
    {
        $states = State::orderBy("name", "ASC")->get();
        return StateResource::collection($states)->additional($this->meta);
    }

    public function regions($alias)
    {
        //count
        $count = State::where("alias", $alias)->count();
        //get the state id
        $state = State::where("alias", $alias)->first();
        //check if state is found
        if ($count != 0) {
            $regions = Region::where("state_id", $state->id)->orderBy("name", "ASC")->get();
            return RegionResource::collection($regions)->additional($this->meta);
        } else {
            // return error
            return [
                "error" => false,
                "message" => "No record found, please try again!"
            ];
        }
    }

    public function getStateByCapitalAlias(string $alias)
    {
        $capital = Capital::where("alias", $alias)->first();
        if ($capital) {
            $states = State::where("capital_id", $capital->id)->get();
            return StateResource::collection($states)->additional($this->meta);
        } else {
            return [
                "error" => false,
                "message" => "No record found, please try again!"
            ];
        }
    }
}
