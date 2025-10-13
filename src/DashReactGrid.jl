
module DashReactGrid
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.1.0"

include("jl/reactgridlayout.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_react_grid",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-ReactGridLayout.js",
    external_url = "https://unpkg.com/dash_react_grid@0.1.0/dash_react_grid/async-ReactGridLayout.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ReactGridLayout.js.map",
    external_url = "https://unpkg.com/dash_react_grid@0.1.0/dash_react_grid/async-ReactGridLayout.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_react_grid.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_react_grid.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
