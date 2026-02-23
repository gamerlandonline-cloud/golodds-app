
# Read file content using StreamReader to preserve UTF-8 encoding
$reader = New-Object System.IO.StreamReader('e:\GOLODDS\fixtures_ppl_real.json', [System.Text.Encoding]::UTF8)
$rawText = $reader.ReadToEnd()
$reader.Close()

$json = ConvertFrom-Json $rawText
$matchList = $json.matches

# Output lines
$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('const PPL_FIXTURES = [')

$total = $matchList.Count
$i = 0

foreach ($m in $matchList) {
    $i++
    $comma = if ($i -lt $total) { ',' } else { '' }
    $ht = $m.homeTeam.shortName
    $at = $m.awayTeam.shortName
    $dt = $m.utcDate
    $rd = $m.matchday
    $st = $m.status

    $sh = if ($null -eq $m.score.fullTime.home) { 'null' } else { "$($m.score.fullTime.home)" }
    $sa = if ($null -eq $m.score.fullTime.away) { 'null' } else { "$($m.score.fullTime.away)" }

    [void]$sb.AppendLine("  { round: $rd, date: `"$dt`", home: `"$ht`", away: `"$at`", status: `"$st`", hScore: $sh, aScore: $sa }$comma")
}

[void]$sb.AppendLine('];')

$outputStr = $sb.ToString()
# Fix encoding artifacts using char codes
$outputStr = $outputStr.Replace([char]0x251C + [char]0xFFFD + [char]0xFFFD + 'ria SC', [char]0x56 + 'it' + [char]0xF3 + 'ria SC')
$outputStr = $outputStr.Replace('Vit' + [char]0xFFFD + [char]0xFFFD + 'ria', 'Vit' + [char]0xF3 + 'ria')
$outputStr = $outputStr.Replace('Famalic' + [char]0xFFFD + [char]0xFFFD + 'o', 'Famalic' + [char]0xE3 + 'o')

$writer = New-Object System.IO.StreamWriter('e:\GOLODDS\js\ppl_fixtures.js', $false, [System.Text.Encoding]::UTF8)
$writer.Write($outputStr)
$writer.Close()

Write-Host "Done! Written $total fixtures."
