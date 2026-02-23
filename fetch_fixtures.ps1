
$h = @{ "X-Auth-Token" = "666a4fbd3130438c8c50f83679805561" }
try {
    $data = Invoke-RestMethod -Uri "https://api.football-data.org/v4/competitions/PL/matches?season=2025" -Headers $h
    $data | ConvertTo-Json -Depth 10 | Out-File -FilePath "e:\GOLODDS\assets\pl_fixtures_2025.json" -Encoding utf8
    Write-Host "Success: Fixtures saved."
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}
