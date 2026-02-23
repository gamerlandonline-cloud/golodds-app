
$raw = Get-Content -Path "e:\GOLODDS\fixtures_ppl_real.json" -Raw
$json = ConvertFrom-Json $raw

$results = @()

foreach ($m in $json.matches) {
    $obj = [PSCustomObject]@{
        round  = $m.matchday
        date   = $m.utcDate
        home   = $m.homeTeam.shortName
        away   = $m.awayTeam.shortName
        status = $m.status
        hScore = $m.score.fullTime.home
        aScore = $m.score.fullTime.away
    }
    $results += $obj
}

# Output as clean JSON
$results | ConvertTo-Json | Out-File -FilePath "e:\GOLODDS\data\ppl_fixtures.json" -Encoding UTF8

Write-Host "Done! Total matches: $($results.Count)"
