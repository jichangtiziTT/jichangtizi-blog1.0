$destination = "jichangtizi-project.zip"
if (Test-Path $destination) {
    Remove-Item $destination -Force
}

$files = Get-ChildItem -Path . | Where-Object { 
    $_.Name -ne "node_modules" -and 
    $_.Name -ne ".astro" -and 
    $_.Extension -ne ".zip" 
} | ForEach-Object { $_.FullName }

Write-Host "Packaging $($files.Count) items into $destination..."
Compress-Archive -Path $files -DestinationPath $destination -Force

$result = Get-Item $destination
$sizeKB = [math]::Round($result.Length / 1024, 2)
Write-Host "Successfully generated: $($result.Name) ($sizeKB KB)"
