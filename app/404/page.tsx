export default () => {
    return (
        <main style={{ backgroundColor: '#09090B' }}> {/* Set the background color to #09090B */}
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-white"> {/* Keep text color white */}
                    <div className="space-y-3 text-center">
                        <h3 className="text-indigo-400 font-semibold"> {/* Slightly lighter indigo for contrast */}
                            404 Error
                        </h3>
                        <p className="text-white text-4xl font-semibold sm:text-5xl">
                            Page not found
                        </p>
                        <p className="text-white"> {/* Keep this text white */}
                            Sorry, the page you are looking for could not be found or has been removed.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
