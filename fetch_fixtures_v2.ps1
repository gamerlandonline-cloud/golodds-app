
$h = @{ "X-Auth-Token" = "666a4fbd3130438c8c50f83679805561" }
function Get-API($path) {
    try {
        $data = Invoke-RestMethod -Uri "https://api.football-data.org/v4/$path" -Headers $h
        return $data
    }
    catch {
        Write-Host "Error on $path: $($_.Exception.Message)"
        return $null
    }
}

$comp = Get-API "competitions/PL"
if ($comp) {
    Write-Host "Current Season: $($comp.currentSeason.startDate) to $($comp.currentSeason.endDate)"
    $matches = Get-API "competitions/PL/matches?season=$($comp.currentSeason.startDate.Substring(0,4))"
    if ($matches) {
        $matches | ConvertTo-Json -Depth 10 | Out-File -FilePath "e:\GOLODDS\assets\pl_fixtures_current.json" -Encoding utf8
        Write-Host "Success: $($matches.matches.Count) matches saved."
    }
}
